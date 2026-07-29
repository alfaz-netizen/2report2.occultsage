/**
 * ====================================================================
 * VASTUWHEELS - RAZORPAY WEBHOOK + UNIQUE CUSTOMER ID + 2-TAB GOOGLE SHEETS SCRIPT (Code.gs)
 * ====================================================================
 * 
 * IMPORTANT DEPLOYMENT STEPS:
 * 1. Open Google Sheets -> Extensions -> Apps Script
 * 2. Delete any extra files (like `code1.gs.gs`) on the left sidebar so only ONE `Code.gs` file exists!
 * 3. Replace all code in `Code.gs` with this code and click Save (Ctrl+S).
 * 4. Select `setupSheetHeaders` from the toolbar and click 'Run' ONCE to create both Tabs:
 *    - Tab 1: "996 Payments" (23 Columns)
 *    - Tab 2: "Popup Sheet" (7 Columns)
 * 5. CRITICAL: Click 'Deploy' -> 'Manage deployments' -> Edit (Pencil icon) -> Version: 'New version' -> 'Deploy'!
 *    (If you don't deploy a NEW VERSION, Razorpay will keep calling the old code!)
 */

// 1. ONE-CLICK SHEET HEADERS SETUP FUNCTION FOR 2 TABS
function setupSheetHeaders() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // -------------------------------------------------------------
  // TAB 1: 996 Payments (23 Columns)
  // -------------------------------------------------------------
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
    "UTM Marketing Tactic"    // Col 23 (W)
  ];
  
  sheet996.getRange(1, 1, 1, headers996.length).setValues([headers996]);
  var headerRange996 = sheet996.getRange(1, 1, 1, headers996.length);
  headerRange996.setFontWeight("bold");
  headerRange996.setBackground("#ea580c");
  headerRange996.setFontColor("#ffffff");
  headerRange996.setHorizontalAlignment("center");
  sheet996.setFrozenRows(1);

  // -------------------------------------------------------------
  // TAB 2: Popup Sheet (7 Columns for ₹1,799 / ₹1,999 Payments)
  // -------------------------------------------------------------
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
    "Original Payment ID"     // Col 7 (G) - ₹996 Original Payment ID
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

    // -------------------------------------------------------------
    // CRITICAL FILTER: ONLY PROCESS VASTUWHEELS LANDING PAGE PAYMENTS!
    // -------------------------------------------------------------
    var isVastuWheelsPayment = (
      notes.payment_type === "form_checkout" ||
      notes.payment_type === "popup_upgrade" ||
      (notes.unique_customer_id && notes.unique_customer_id.indexOf("VW-") === 0)
    );

    if (!isVastuWheelsPayment) {
      // IGNORE UNRELATED/EXTERNAL PAYMENTS (e.g. ₹799 payments from other products)
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "ignored", 
        message: "Not a VastuWheels landing page payment. Ignored." 
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var rawAmount = payment.amount ? payment.amount / 100 : 996;
    var formattedDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd-MM-yyyy HH:mm:ss");
    var paymentId = payment.id || "N/A";
    var uniqueCustomerId = notes.unique_customer_id;
    
    // Parse UTM details if present
    var utmDetails = {};
    if (notes.utm_details) {
      try {
        utmDetails = JSON.parse(notes.utm_details);
      } catch (err) {
        utmDetails = {};
      }
    }

    var fullName = notes.full_name || notes.customer_name || "Valued Customer";
    if (fullName === payment.contact || /^\+?\d{10,12}$/.test(fullName.trim())) {
      fullName = "Valued Customer";
    }

    var phone = notes.phone_number || payment.contact || "N/A";
    var email = notes.email_id || payment.email || "N/A";

    // -------------------------------------------------------------
    // ROUTE TO "Popup Sheet" vs "996 Payments"
    // -------------------------------------------------------------
    var isPopupUpgrade = (
      notes.payment_type === "popup_upgrade" ||
      notes.upgrade_type === "VIP 1-on-1 Consultation" ||
      notes.upgrade_type === "1-on-1 Consultation" ||
      (notes.original_payment_id && notes.original_payment_id !== "N/A") ||
      rawAmount >= 1500
    );

    if (isPopupUpgrade) {
      // 🚀 TAB 2: POPUP SHEET (₹1,799 / ₹1,999 Payments)
      var sheetPopup = ss.getSheetByName("Popup Sheet");
      if (!sheetPopup) {
        sheetPopup = ss.insertSheet("Popup Sheet");
      }

      var originalPaymentId = notes.original_payment_id || "N/A";

      sheetPopup.appendRow([
        formattedDate,
        uniqueCustomerId,
        paymentId,
        rawAmount.toFixed(2),
        fullName,
        phone,
        originalPaymentId
      ]);

      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: "Popup Sheet", unique_customer_id: uniqueCustomerId }))
        .setMimeType(ContentService.MimeType.JSON);

    } else {
      // 📄 TAB 1: 996 PAYMENTS (₹996 Checkout Payments)
      var sheet996 = ss.getSheetByName("996 Payments");
      if (!sheet996) {
        sheet996 = ss.getSheetByName("Sheet1") || ss.getActiveSheet();
      }

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
        utmMarketingTactic
      ]);

      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: "996 Payments", unique_customer_id: uniqueCustomerId }))
        .setMimeType(ContentService.MimeType.JSON);
    }

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
