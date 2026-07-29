import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Razorpay Node.js SDK Instance
const razorpayKeyId = process.env.RAZORPAY_KEY_ID || 'rzp_live_SSFQ4gpLaM0VXb';
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET || '';

const razorpay = new Razorpay({
  key_id: razorpayKeyId,
  key_secret: razorpayKeySecret,
});

/**
 * ====================================================================
 * 1. CREATE RAZORPAY ORDER ROUTE (WITH AUTOMATIC PAYMENT CAPTURE)
 * ====================================================================
 * Route: POST /api/create-order
 * Description: Creates a Razorpay Order with `payment_capture: 1`
 * `payment_capture: 1` ensures Razorpay AUTO-CAPTURES payment immediately upon authorization!
 */
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, notes = {} } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      console.error('[ORDER CREATION FAILED] Invalid amount provided:', amount);
      return res.status(400).json({ success: false, message: 'Invalid payment amount' });
    }

    // Convert amount to paise (e.g. ₹996 -> 99600 paise)
    const amountInPaise = Math.round(Number(amount) * 100);

    const orderOptions = {
      amount: amountInPaise,
      currency: currency,
      receipt: receipt || `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      payment_capture: 1, // CRITICAL: 1 = Automatic Capture enabled on Order creation!
      notes: notes,
    };

    console.log(`[ORDER CREATING] Initiating Razorpay Order... Amount: ₹${amount} (${amountInPaise} paise), Receipt: ${orderOptions.receipt}`);

    const order = await razorpay.orders.create(orderOptions);

    console.log(`[ORDER CREATED SUCCESS] Order ID: ${order.id}, Status: ${order.status}, Auto-Capture: ${order.payment_capture}`);

    return res.status(200).json({
      success: true,
      key_id: razorpayKeyId,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      status: order.status,
    });
  } catch (error) {
    console.error('[ORDER CREATION ERROR] Failed to create Razorpay order:');
    console.error('  Message:', error.message);
    if (error.error) {
      console.error('  Code:', error.error.code);
      console.error('  Description:', error.error.description);
      console.error('  Field:', error.error.field);
    }
    return res.status(500).json({
      success: false,
      message: 'Failed to create Razorpay Order',
      error: error.error || error.message,
    });
  }
});

/**
 * ====================================================================
 * 2. VERIFY PAYMENT & EXPLICIT PAYMENT CAPTURE ROUTE
 * ====================================================================
 * Route: POST /api/verify-payment
 * Description: 
 *   1. Verifies HMAC-SHA256 Payment Signature
 *   2. Checks Payment status via Razorpay Fetch API
 *   3. If status is 'authorized', explicitly calls Razorpay Capture API
 *   4. Safely prevents duplicate capture errors
 */
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, currency = 'INR' } = req.body;

    console.log(`[VERIFYING PAYMENT] Payment ID: ${razorpay_payment_id}, Order ID: ${razorpay_order_id}`);

    // Step A: Cryptographic HMAC-SHA256 Signature Verification
    if (razorpay_order_id && razorpay_signature) {
      const generatedSignature = crypto
        .createHmac('sha256', razorpayKeySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      if (generatedSignature !== razorpay_signature) {
        console.error(`[SIGNATURE MISMATCH] Generated: ${generatedSignature}, Received: ${razorpay_signature}`);
        return res.status(400).json({
          success: false,
          message: 'Invalid payment signature verification failed',
        });
      }
      console.log(`[SIGNATURE VERIFIED SUCCESS] HMAC Signature matched for Payment ID: ${razorpay_payment_id}`);
    }

    // Step B: Fetch Payment Status from Razorpay API
    let paymentDetails;
    try {
      paymentDetails = await razorpay.payments.fetch(razorpay_payment_id);
      console.log(`[PAYMENT FETCHED] ID: ${paymentDetails.id}, Status: ${paymentDetails.status}, Amount: ₹${paymentDetails.amount / 100}`);
    } catch (fetchErr) {
      console.error(`[PAYMENT FETCH ERROR] Failed to fetch payment ${razorpay_payment_id}:`, fetchErr.message);
      return res.status(500).json({ success: false, message: 'Could not fetch payment details from Razorpay' });
    }

    // Step C: Check if payment is already Captured
    if (paymentDetails.status === 'captured') {
      console.log(`[PAYMENT ALREADY CAPTURED] Payment ID: ${razorpay_payment_id} is already in captured state.`);
      return res.status(200).json({
        success: true,
        message: 'Payment verified and already captured',
        status: 'captured',
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      });
    }

    // Step D: Automatic Fallback Capture if Payment is in Authorized State
    if (paymentDetails.status === 'authorized') {
      console.log(`[PAYMENT AUTHORIZED] Payment ID: ${razorpay_payment_id} is Authorized. Initiating Automatic Capture API call...`);

      const captureAmount = amount ? Math.round(Number(amount) * 100) : paymentDetails.amount;

      try {
        const capturedPayment = await razorpay.payments.capture(
          razorpay_payment_id,
          captureAmount,
          currency
        );

        console.log(`[PAYMENT CAPTURED SUCCESS] Payment ID: ${capturedPayment.id} successfully captured! Status: ${capturedPayment.status}`);

        return res.status(200).json({
          success: true,
          message: 'Payment verified and captured successfully',
          status: capturedPayment.status,
          paymentId: capturedPayment.id,
          orderId: razorpay_order_id,
        });
      } catch (captureError) {
        console.error(`[CAPTURE FAILURE] Failed to capture Authorized Payment ID: ${razorpay_payment_id}`);
        console.error('  Error Code:', captureError.error ? captureError.error.code : captureError.code);
        console.error('  Description:', captureError.error ? captureError.error.description : captureError.message);
        console.error('  Field:', captureError.error ? captureError.error.field : 'N/A');

        // Handle case where payment was captured concurrently by Razorpay auto-capture
        if (
          captureError.error &&
          (captureError.error.code === 'BAD_REQUEST_ERROR' ||
           (captureError.error.description && captureError.error.description.includes('already captured')))
        ) {
          console.log(`[DUPLICATE CAPTURE PREVENTED] Payment ID: ${razorpay_payment_id} was already captured during processing.`);
          return res.status(200).json({
            success: true,
            message: 'Payment is already captured',
            status: 'captured',
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
          });
        }

        return res.status(500).json({
          success: false,
          message: 'Payment signature verified, but automatic capture failed',
          error: captureError.error || captureError.message,
        });
      }
    }

    console.warn(`[UNEXPECTED STATUS] Payment ID: ${razorpay_payment_id} status is ${paymentDetails.status}`);
    return res.status(200).json({
      success: true,
      message: `Payment status is ${paymentDetails.status}`,
      status: paymentDetails.status,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error('[VERIFICATION ERROR] Internal error during payment verification:', error);
    return res.status(500).json({
      success: false,
      message: 'Payment verification internal server error',
      error: error.message,
    });
  }
});

/**
 * ====================================================================
 * 3. RAZORPAY WEBHOOK RECEIVER & AUTO-CAPTURE ROUTE
 * ====================================================================
 * Route: POST /api/webhook
 * Description: Receives Razorpay webhook notifications (`payment.authorized`, `payment.captured`)
 *   If `payment.authorized` is received, automatically calls `razorpay.payments.capture()`!
 */
app.post('/api/webhook', async (req, res) => {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const webhookSignature = req.headers['x-razorpay-signature'];

    // Verify Webhook Signature if secret is configured
    if (webhookSecret && webhookSignature) {
      const shasum = crypto.createHmac('sha256', webhookSecret);
      shasum.update(JSON.stringify(req.body));
      const digest = shasum.digest('hex');

      if (digest !== webhookSignature) {
        console.error('[WEBHOOK SIGNATURE MISMATCH] Invalid Webhook Signature');
        return res.status(400).json({ status: 'invalid_signature' });
      }
    }

    const event = req.body.event;
    const paymentEntity = req.body.payload?.payment?.entity || {};

    console.log(`[WEBHOOK RECEIVED] Event: ${event}, Payment ID: ${paymentEntity.id}, Status: ${paymentEntity.status}, Amount: ₹${(paymentEntity.amount || 0) / 100}`);

    // If event is payment.authorized, trigger automatic capture
    if (event === 'payment.authorized' && paymentEntity.id) {
      console.log(`[WEBHOOK AUTO-CAPTURE] Event payment.authorized received for ID: ${paymentEntity.id}. Capturing now...`);
      try {
        const captured = await razorpay.payments.capture(paymentEntity.id, paymentEntity.amount, paymentEntity.currency || 'INR');
        console.log(`[WEBHOOK CAPTURE SUCCESS] Payment ID: ${captured.id} captured via Webhook!`);
      } catch (err) {
        console.error(`[WEBHOOK CAPTURE ERROR] Failed to capture payment ${paymentEntity.id} via Webhook:`, err.message);
      }
    }

    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error('[WEBHOOK PROCESS ERROR]:', error.message);
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 VastuWheels Razorpay Express Server Running!`);
  console.log(`📡 Port: http://localhost:${PORT}`);
  console.log(`⚡ Payment Capture: Automatic (payment_capture: 1 & Fallback Capture API)`);
  console.log(`====================================================`);
});
