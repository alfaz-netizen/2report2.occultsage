/**
 * ====================================================================
 * VASTUWHEELS - RAZORPAY WEBHOOK TO GOOGLE SHEETS APPS SCRIPT (Code.gs)
 * ====================================================================
 * 
 * INSTRUCTIONS TO DEPLOY:
 * 1. Open Google Sheets -> Extensions -> Apps Script
 * 2. Paste this entire code into `Code.gs`
 * 3. Run `setupSheetHeaders()` ONCE to automatically create all column headers in Google Sheet.
 * 4. Click 'Deploy' -> 'New deployment'
 * 5. Select type: 'Web app'
 *    - Description: "Razorpay VastuWheels Webhook with UTM Tracking"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (CRITICAL for Razorpay webhook to work)
 * 6. Click 'Deploy' & copy the Web App URL!
 * 7. In Razorpay Dashboard -> Settings -> Webhooks -> Add New Webhook:
 *    - Webhook URL: (Paste your Google Web App URL)
 *    - Secret: (Leave blank or set optional secret)
 *    - Active Events: Select `payment.captured` and/or `order.paid`
 * 8. Done! All orders with UTM campaign analytics will automatically populate into your Google Sheet!
 */

// 1. ONE-CLICK SHEET HEADERS SETUP FUNCTION WITH UTM CAMPAIGN COLUMNS
function setupSheetHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = [
    "Date & Time",
    "Payment ID",
    "Amount (INR)",
    "Full Name",
    "WhatsApp Phone Number",
    "Email ID",
    "Report Language",
    "Property Type",
    "Entrance Direction",
    "Primary Challenge Area",
    "Date of Birth",
    "Gender",
    "Current Location",
    "UTM Source",
    "UTM Medium",
    "UTM Campaign",
    "UTM Term",
    "UTM Content",
    "UTM ID",
    "UTM Platform",
    "UTM Creative Format",
    "UTM Marketing Tactic",
    "Report Sent Status" // Dedicated tracking column for report delivery
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#ea580c");
  headerRange.setFontColor("#ffffff");
  headerRange.setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
  
  // Auto-resize column widths for crisp layout
  for (var i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
}

// 2. RAZORPAY WEBHOOK RECEIVER FUNCTION WITH UTM PARAMETER EXTRACTION
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var postData = JSON.parse(e.postData.contents);
    
    // Extract payload from Razorpay Event
    var eventType = postData.event;
    var payment = postData.payload.payment ? postData.payload.payment.entity : {};
    var notes = payment.notes || {};
    
    // Format timestamp
    var formattedDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd-MM-yyyy HH:mm:ss");
    var paymentId = payment.id || "N/A";
    var amount = payment.amount ? (payment.amount / 100).toFixed(2) : "996.00";
    
    // Customer Details from Notes
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
    
    // UTM Ad Campaign Parameters from Notes
    var utmSource = notes.utm_source || "organic / none";
    var utmMedium = notes.utm_medium || "organic / none";
    var utmCampaign = notes.utm_campaign || "organic / none";
    var utmTerm = notes.utm_term || "organic / none";
    var utmContent = notes.utm_content || "organic / none";
    var utmId = notes.utm_id || "organic / none";
    var utmPlatform = notes.utm_source_platform || "organic / none";
    var utmCreativeFormat = notes.utm_creative_format || "organic / none";
    var utmMarketingTactic = notes.utm_marketing_tactic || "organic / none";

    var reportSentStatus = "PENDING"; // Default status for report delivery tracking

    // Append new row to Google Sheet
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
  return ContentService.createTextOutput("VastuWheels Webhook with UTM Campaign Tracking is Live and Active!");
}
