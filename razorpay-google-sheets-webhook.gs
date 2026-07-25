/**
 * ====================================================================
 * VASTUWHEELS - RAZORPAY WEBHOOK + UTM TRACKING + WATI WHATSAPP APPS SCRIPT (Code.gs)
 * ====================================================================
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Open Google Sheets -> Extensions -> Apps Script
 * 2. Paste this entire code into `Code.gs` (replace old code completely)
 * 3. Run `setupSheetHeaders()` ONCE from the Apps Script toolbar to create all 23 Column Headers.
 * 4. Click 'Deploy' -> 'New deployment'
 *    - Select type: 'Web app'
 *    - Description: "Razorpay VastuWheels Webhook with UTM & WATI"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (CRITICAL for Razorpay Webhook)
 * 5. Click 'Deploy' and copy the Web App URL!
 * 6. Paste Web App URL in Razorpay Dashboard -> Settings -> Webhooks -> Add New Webhook (`payment.captured`).
 * 7. Set up a Time-driven Trigger in Apps Script to run `sendPendingMessages()` every 5-10 minutes for automated WATI WhatsApp report delivery!
 */

// 1. ONE-CLICK SHEET HEADERS SETUP FUNCTION (23 COLUMNS INCLUDING ALL 9 UTMs + WATI STATUS)
function setupSheetHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = [
    "Date & Time",            // Col 1 (A)
    "Payment ID",             // Col 2 (B)
    "Amount (INR)",           // Col 3 (C)
    "Full Name",              // Col 4 (D)
    "WhatsApp Phone Number",  // Col 5 (E)
    "Email ID",               // Col 6 (F)
    "Report Language",        // Col 7 (G)
    "Property Type",           // Col 8 (H)
    "Entrance Direction",      // Col 9 (I)
    "Primary Challenge Area",  // Col 10 (J)
    "Date of Birth",          // Col 11 (K)
    "Gender",                 // Col 12 (L)
    "Current Location",       // Col 13 (M)
    "UTM Source",             // Col 14 (N)
    "UTM Medium",             // Col 15 (O)
    "UTM Campaign",           // Col 16 (P)
    "UTM Term",               // Col 17 (Q)
    "UTM Content",            // Col 18 (R)
    "UTM ID",                 // Col 19 (S)
    "UTM Platform",           // Col 20 (T)
    "UTM Creative Format",     // Col 21 (U)
    "UTM Marketing Tactic",   // Col 22 (V)
    "Report Sent Status"      // Col 23 (W) - WATI WhatsApp Status Column
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#ea580c");
  headerRange.setFontColor("#ffffff");
  headerRange.setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
  
  for (var i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
}

// 2. RAZORPAY WEBHOOK RECEIVER FUNCTION
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var postData = JSON.parse(e.postData.contents);
    
    var eventType = postData.event;
    var payment = postData.payload.payment ? postData.payload.payment.entity : {};
    var notes = payment.notes || {};
    
    // Parse full encoded UTM details if present
    var utmDetails = {};
    if (notes.utm_details) {
      try {
        utmDetails = JSON.parse(notes.utm_details);
      } catch (err) {
        utmDetails = {};
      }
    }
    
    var formattedDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd-MM-yyyy HH:mm:ss");
    var paymentId = payment.id || "N/A";
    var amount = payment.amount ? (payment.amount / 100).toFixed(2) : "996.00";
    
    // Customer Details
    var fullName = notes.full_name || payment.contact || "N/A";
    var phone = notes.phone_number || payment.contact || "N/A";
    var email = notes.email_id || payment.email || "N/A";
    var reportLanguage = notes.report_language || "N/A";
    var propertyType = notes.property_type || "N/A";
    var entranceDirection = notes.entrance_direction || "N/A";
    var primaryChallenge = notes.primary_challenge || "N/A";
    var dob = notes.date_of_birth || "N/A";
    var gender = notes.gender || "N/A";
    var location = notes.current_location || "N/A";
    
    // All 9 Ad Campaign UTM Parameters
    var utmSource = notes.utm_source || utmDetails.utm_source || "organic / none";
    var utmMedium = notes.utm_medium || utmDetails.utm_medium || "organic / none";
    var utmCampaign = notes.utm_campaign || utmDetails.utm_campaign || "organic / none";
    var utmTerm = notes.utm_term || utmDetails.utm_term || "organic / none";
    var utmContent = notes.utm_content || utmDetails.utm_content || "organic / none";
    var utmId = notes.utm_id || utmDetails.utm_id || "organic / none";
    var utmPlatform = notes.utm_source_platform || utmDetails.utm_source_platform || "organic / none";
    var utmCreativeFormat = notes.utm_creative_format || utmDetails.utm_creative_format || "organic / none";
    var utmMarketingTactic = notes.utm_marketing_tactic || utmDetails.utm_marketing_tactic || "organic / none";

    var reportSentStatus = "PENDING"; // Default status for WATI report delivery

    // Append complete row to Google Sheet
    sheet.appendRow([
      formattedDate,
      paymentId,
      amount,
      fullName,
      phone,
      email,
      reportLanguage,
      propertyType,
      entranceDirection,
      primaryChallenge,
      dob,
      gender,
      location,
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
      utmId,
      utmPlatform,
      utmCreativeFormat,
      utmMarketingTactic,
      reportSentStatus
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 3. GET HANDLER FOR TESTING WEB APP URL IN BROWSER
function doGet() {
  return ContentService.createTextOutput("VastuWheels Webhook + UTM + WATI Integration is Live and Active!");
}

// 4. WATI AUTOMATED WHATSAPP MESSAGE DISPATCHER
const WATI_ENDPOINT = "https://live-mt-server.wati.io/311651";
const ACCESS_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFsZmF6QG1hbmdvdHJlZXRlY2guY29tIiwibmFtZWlkIjoiYWxmYXpAbWFuZ290cmVldGVjaC5jb20iLCJlbWFpbCI6ImFsZmF6QG1hbmdvdHJlZXRlY2guY29tIiwiYXV0aF90aW1lIjoiMDcvMjUvMjAyNiAwNTozNjoxNSIsInRlbmFudF9pZCI6IjMxMTY1MSIsImRiX25hbWUiOiJtdC1wcm9kLVRlbmFudHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.RDQ4nICxd_B-9ktJpQUmNLwmcbThOnjTt1I9DxYpwlI";
const TEMPLATE_NAME = "vastu_wheels_report";

function sendPendingMessages() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  if (data.length <= 1) return; // No rows to process

  // Find column index dynamically
  var headers = data[0];
  var phoneCol = headers.indexOf("WhatsApp Phone Number");
  var amountCol = headers.indexOf("Amount (INR)");
  var nameCol = headers.indexOf("Full Name");
  var statusCol = headers.indexOf("Report Sent Status");

  // Fallback defaults if exact header match differs
  if (phoneCol === -1) phoneCol = 4; // Col E
  if (amountCol === -1) amountCol = 2; // Col C
  if (nameCol === -1) nameCol = 3; // Col D
  if (statusCol === -1) statusCol = 22; // Col W (Index 22 = Column 23)

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var amount = row[amountCol];
    var fullName = row[nameCol];
    var rawPhone = row[phoneCol] ? row[phoneCol].toString().trim() : "";
    var status = row[statusCol];

    if (status === "SENT" || !rawPhone) continue;

    // Format phone number to clean digits
    var cleanPhone = rawPhone.replace(/\D/g, "");
    if (cleanPhone.length === 10) {
      cleanPhone = "91" + cleanPhone;
    } else if (cleanPhone.startsWith("0")) {
      cleanPhone = "91" + cleanPhone.substring(1);
    }

    try {
      var payload = {
        template_name: TEMPLATE_NAME,
        broadcast_name: TEMPLATE_NAME,
        parameters: [
          {
            name: "full_name",
            value: fullName || "Valued Customer"
          },
          {
            name: "amount_inr",
            value: amount ? amount.toString() : "996.00"
          }
        ]
      };

      var options = {
        method: "post",
        contentType: "application/json",
        headers: {
          Authorization: ACCESS_TOKEN
        },
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
      };

      var url = WATI_ENDPOINT + "/api/v1/sendTemplateMessage?whatsappNumber=" + cleanPhone;
      var response = UrlFetchApp.fetch(url, options);

      Logger.log("Row " + (i + 1) + " WATI Response: " + response.getContentText());

      if (response.getResponseCode() === 200) {
        sheet.getRange(i + 1, statusCol + 1).setValue("SENT");
      } else {
        sheet.getRange(i + 1, statusCol + 1).setValue("FAILED (" + response.getResponseCode() + ")");
      }

    } catch (err) {
      sheet.getRange(i + 1, statusCol + 1).setValue("ERROR");
      Logger.log("Row " + (i + 1) + " Error: " + err);
    }
  }
}
