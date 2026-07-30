/**
 * ====================================================================
 * VASTUWHEELS - RAZORPAY WEBHOOK + WATI WHATSAPP AUTOMATION (Code.gs)
 * ====================================================================
 * 
 * INSTRUCTIONS:
 * 1. Open Google Sheets -> Extensions -> Apps Script.
 * 2. Delete all extra files on left sidebar so ONLY `Code.gs` exists!
 * 3. Replace all code in `Code.gs` with this file and click Save (Ctrl + S).
 * 4. Select `setupSheetHeaders` from top toolbar and click 'Run' ONCE to set headers for both Tabs.
 * 5. Click 'Deploy' -> 'Manage deployments' -> Pencil (Edit) -> Version: 'New version' -> 'Deploy'!
 * 6. TO SEND WHATSAPP MESSAGES AUTOMATICALLY:
 *    - Click Clock icon ⏰ (Triggers) on left sidebar -> 'Add Trigger'.
 *    - Function: `sendPendingWatiMessages`
 *    - Event source: 'Time-driven' -> 'Minutes timer' -> 'Every 1 minute'.
 *    - Click 'Save'!
 */

// WATI CREDENTIALS
var WATI_ENDPOINT = "https://live-mt-server.wati.io/10159161";
var ACCESS_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVjb212YXN0dXNoaWtoYXJAZ21haWwuY29tIiwibmFtZWlkIjoiZWNvbXZhc3R1c2hpa2hhckBnbWFpbC5jb20iLCJlbWFpbCI6ImVjb212YXN0dXNoaWtoYXJAZ21haWwuY29tIiwiYXV0aF90aW1lIjoiMDcvMjkvMjAyNiAwOToyNzoyNyIsInRlbmFudF9pZCI6IjEwMTU5MTYxIiwiZGJfbmFtZSI6Im10LXByb2QtVGVuYW50cyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFETUlOSVNUUkFUT1IiLCJleHAiOjI1MzQwMjMwMDgwMCwiaXNzIjoiQ2xhcmVfQUkiLCJhdWQiOiJDbGFyZV9BSSJ9.f33jZejei1JQ1rOi5LYcP26uxpu5YSmej5mztZqLN_w";
var TEMPLATE_NAME = "vastu_wheels_report";

// 1. ONE-CLICK SHEET HEADERS SETUP FUNCTION FOR 2 TABS
function setupSheetHeaders() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // TAB 1: 996 Payments (24 Columns)
  var sheet996 = ss.getSheetByName("996 Payments");
  if (!sheet996) {
    sheet996 = ss.insertSheet("996 Payments");
  }
  
  var headers996 = [
    "Date & Time",            // Col 1 (A)
    "Unique Customer ID",     // Col 2 (B) - Unique ID for matching customer!
    "Payment ID",             // Col 3 (C)
    "Amount (INR)",           // Col 4 (D)
    "Full Name",              // Col 5 (E)
    "WhatsApp Phone Number",  // Col 6 (F)
    "Email ID",               // Col 7 (G)
    "Report Language",        // Col 8 (H)
    "Property Type",           // Col 9 (I)
    "Entrance Direction",      // Col 10 (J)
    "Primary Challenge Area",  // Col 11 (K)
    "Date of Birth",          // Col 12 (L)
    "Gender",                 // Col 13 (M)
    "Current Location",       // Col 14 (N)
    "UTM Source",             // Col 15 (O)
    "UTM Medium",             // Col 16 (P)
    "UTM Campaign",           // Col 17 (Q)
    "UTM Term",               // Col 18 (R)
    "UTM Content",            // Col 19 (S)
    "UTM ID",                 // Col 20 (T)
    "UTM Platform",           // Col 21 (U)
    "UTM Creative Format",     // Col 22 (V)
    "UTM Marketing Tactic",   // Col 23 (W)
    "Wati Status"             // Col 24 (X) - WATI Status
  ];
  
  sheet996.getRange(1, 1, 1, headers996.length).setValues([headers996]);
  var headerRange996 = sheet996.getRange(1, 1, 1, headers996.length);
  headerRange996.setFontWeight("bold");
  headerRange996.setBackground("#ea580c");
  headerRange996.setFontColor("#ffffff");
  headerRange996.setHorizontalAlignment("center");
  sheet996.setFrozenRows(1);

  // TAB 2: Popup Sheet (8 Columns for ₹1,799 / ₹1,999 Payments)
  var sheetPopup = ss.getSheetByName("Popup Sheet");
  if (!sheetPopup) {
    sheetPopup = ss.insertSheet("Popup Sheet");
  }

  var headersPopup = [
    "Date & Time",            // Col 1 (A)
    "Unique Customer ID",     // Col 2 (B) - Same Unique ID from ₹996 payment!
    "Payment ID",             // Col 3 (C) - Upgrade Payment ID
    "Amount (INR)",           // Col 4 (D) - ₹1,799 or ₹1,999
    "Full Name",              // Col 5 (E)
    "WhatsApp Phone Number",  // Col 6 (F)
    "Original Payment ID",    // Col 7 (G) - ₹996 Original Payment ID
    "Wati Status"             // Col 8 (H) - WATI Status
  ];

  sheetPopup.getRange(1, 1, 1, headersPopup.length).setValues([headersPopup]);
  var headerRangePopup = sheetPopup.getRange(1, 1, 1, headersPopup.length);
  headerRangePopup.setFontWeight("bold");
  headerRangePopup.setBackground("#25d366");
  headerRangePopup.setFontColor("#ffffff");
  headerRangePopup.setHorizontalAlignment("center");
  sheetPopup.setFrozenRows(1);
}

// 2. RAZORPAY WEBHOOK RECEIVER FUNCTION
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var postData = JSON.parse(e.postData.contents);
    
    var payment = postData.payload.payment ? postData.payload.payment.entity : {};
    var notes = payment.notes || {};

    // Filter: Only process VastuWheels landing page payments
    var isVastuWheelsPayment = (
      notes.payment_type === "form_checkout" ||
      notes.payment_type === "popup_upgrade" ||
      (notes.unique_customer_id && notes.unique_customer_id.indexOf("VW-") === 0)
    );

    if (!isVastuWheelsPayment) {
      return ContentService.createTextOutput(JSON.stringify({ status: "ignored", message: "Not a VastuWheels payment. Ignored." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var rawAmount = payment.amount ? payment.amount / 100 : 996;
    var formattedDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd-MM-yyyy HH:mm:ss");
    var paymentId = payment.id || "N/A";
    var uniqueCustomerId = notes.unique_customer_id || "N/A";
    
    var utmDetails = {};
    if (notes.utm_details) {
      try { utmDetails = JSON.parse(notes.utm_details); } catch (err) {}
    }

    var fullName = notes.full_name || notes.customer_name || "Valued Customer";
    if (fullName === payment.contact || /^\+?\d{10,12}$/.test(fullName.trim())) {
      fullName = "Valued Customer";
    }

    var phone = notes.phone_number || payment.contact || "N/A";
    var email = notes.email_id || payment.email || "N/A";

    var isPopupUpgrade = (
      notes.payment_type === "popup_upgrade" ||
      notes.upgrade_type === "VIP 1-on-1 Consultation" ||
      notes.upgrade_type === "1-on-1 Consultation" ||
      (notes.original_payment_id && notes.original_payment_id !== "N/A") ||
      rawAmount >= 1500
    );

    if (isPopupUpgrade) {
      // TAB 2: Popup Sheet (Col H = Wati Status)
      var sheetPopup = ss.getSheetByName("Popup Sheet");
      if (!sheetPopup) sheetPopup = ss.insertSheet("Popup Sheet");

      var originalPaymentId = notes.original_payment_id || "N/A";

      sheetPopup.appendRow([
        formattedDate,
        uniqueCustomerId,
        paymentId,
        rawAmount.toFixed(2),
        fullName,
        phone,
        originalPaymentId,
        "PENDING"
      ]);

      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: "Popup Sheet", unique_customer_id: uniqueCustomerId }))
        .setMimeType(ContentService.MimeType.JSON);

    } else {
      // TAB 1: 996 Payments (Col X = Wati Status)
      var sheet996 = ss.getSheetByName("996 Payments");
      if (!sheet996) sheet996 = ss.getSheetByName("Sheet1") || ss.getActiveSheet();

      var reportLanguage = notes.report_language || "N/A";
      var propertyType = notes.property_type || "N/A";
      var entranceDirection = notes.entrance_direction || "N/A";
      var primaryChallenge = notes.primary_challenge || "N/A";
      var dob = notes.date_of_birth || "N/A";
      var gender = notes.gender || "N/A";
      var location = notes.current_location || "N/A";

      var utmSource = notes.utm_source || utmDetails.utm_source || "organic / none";
      var utmMedium = notes.utm_medium || utmDetails.utm_medium || "organic / none";
      var utmCampaign = notes.utm_campaign || utmDetails.utm_campaign || "organic / none";
      var utmTerm = notes.utm_term || utmDetails.utm_term || "organic / none";
      var utmContent = notes.utm_content || utmDetails.utm_content || "organic / none";
      var utmId = notes.utm_id || utmDetails.utm_id || "organic / none";
      var utmPlatform = notes.utm_source_platform || utmDetails.utm_source_platform || "organic / none";
      var utmCreativeFormat = notes.utm_creative_format || utmDetails.utm_creative_format || "organic / none";
      var utmMarketingTactic = notes.utm_marketing_tactic || utmDetails.utm_marketing_tactic || "organic / none";

      sheet996.appendRow([
        formattedDate,
        uniqueCustomerId,
        paymentId,
        rawAmount.toFixed(2),
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
        "PENDING"
      ]);

      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: "996 Payments", unique_customer_id: uniqueCustomerId }))
        .setMimeType(ContentService.MimeType.JSON);
    }

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 3. STANDALONE WATI WHATSAPP SENDER FUNCTION (TRIGGER OR MANUAL RUN)
function sendPendingWatiMessages() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // Tab 1: 996 Payments -> Col D=Amount(4), Col E=Name(5), Col F=Phone(6), Col X=Wati Status(24)
  var sheet996 = ss.getSheetByName("996 Payments");
  if (sheet996) {
    processSheetWati(sheet996, 5, 4, 6, 24);
  }

  // Tab 2: Popup Sheet -> Col D=Amount(4), Col E=Name(5), Col F=Phone(6), Col H=Wati Status(8)
  var sheetPopup = ss.getSheetByName("Popup Sheet");
  if (sheetPopup) {
    processSheetWati(sheetPopup, 5, 4, 6, 8);
  }
}

// Helper Function: Process Sheet Rows for WATI WhatsApp Message
function processSheetWati(sheet, nameColIndex, amountColIndex, phoneColIndex, statusColIndex) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return;

  var dataRange = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn());
  var values = dataRange.getValues();

  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    var currentStatus = String(row[statusColIndex - 1]).trim();

    // Process rows marked PENDING, FAILED, or empty
    if (currentStatus === "PENDING" || currentStatus.indexOf("FAILED") === 0 || currentStatus === "") {
      var fullName = String(row[nameColIndex - 1]).trim() || "Valued Customer";
      var amount = String(row[amountColIndex - 1]).trim() || "996";
      var rawPhone = String(row[phoneColIndex - 1]).trim();

      // Clean phone number format (e.g., 917217697887)
      var cleanPhone = rawPhone.replace(/[^0-9]/g, "");
      if (cleanPhone.length === 10) {
        cleanPhone = "91" + cleanPhone;
      }

      if (!cleanPhone || cleanPhone.length < 10) {
        sheet.getRange(i + 2, statusColIndex).setValue("FAILED: Invalid Phone");
        continue;
      }

      var result = callWatiApiExact(cleanPhone, fullName, amount);

      if (result.success) {
        sheet.getRange(i + 2, statusColIndex).setValue("SENT");
      } else {
        sheet.getRange(i + 2, statusColIndex).setValue("FAILED: " + result.error);
      }
    }
  }
}

// Helper Function: Exact WATI API Request matching {{full_name}} and {{amount_inr}}
function callWatiApiExact(whatsappNumber, fullName, amount) {
  try {
    var url = WATI_ENDPOINT + "/api/v1/sendTemplateMessage?whatsappNumber=" + whatsappNumber;

    // EXACT variable parameters from your WATI Dashboard Template: {{full_name}} and {{amount_inr}}
    var payload = {
      template_name: TEMPLATE_NAME,
      broadcast_name: "vastu_wheels_report",
      parameters: [
        { name: "full_name", value: String(fullName) },
        { name: "amount_inr", value: String(amount) }
      ]
    };

    var options = {
      method: "post",
      contentType: "application/json",
      headers: {
        "Authorization": ACCESS_TOKEN
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    var response = UrlFetchApp.fetch(url, options);
    var resCode = response.getResponseCode();
    var resText = response.getContentText();

    Logger.log("WATI Response [" + resCode + "]: " + resText);

    if (resCode === 200 || resCode === 201) {
      var resJson = JSON.parse(resText);
      if (resJson.result === true || resJson.status === "SUCCESS" || resJson.validWhatsAppNumber === true || resJson.isSuccessful === true) {
        return { success: true };
      } else {
        return { success: false, error: resJson.info || resJson.message || resText };
      }
    } else {
      return { success: false, error: "HTTP " + resCode + ": " + resText };
    }

  } catch (err) {
    return { success: false, error: err.toString() };
  }
}
