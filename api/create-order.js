export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const { amount } = body;
    
    const keyId = process.env.VITE_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "rzp_live_SSFQ4gpLaM0VXb";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "LCxS51pcOmaaQKCE5tocaJL0";

    const orderAmount = amount ? parseInt(amount, 10) : 149900;
    const authString = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${authString}`
      },
      body: JSON.stringify({
        amount: orderAmount,
        currency: "INR",
        receipt: "rcpt_" + Date.now().toString().slice(-8),
        payment_capture: 1 // CRITICAL: Razorpay Orders API Automatic Capture setting (Authorized -> Captured immediately)
      })
    });

    const orderData = await razorpayResponse.json();

    if (!razorpayResponse.ok) {
      console.error("Razorpay Orders API Error Response:", orderData);
      return res.status(500).json({ error: orderData?.error?.description || "Failed to create Razorpay Order" });
    }

    return res.status(200).json({
      success: true,
      order_id: orderData.id,
      amount: orderData.amount,
      currency: orderData.currency
    });

  } catch (error) {
    console.error("Serverless Create Order Exception:", error);
    return res.status(500).json({ error: error.message });
  }
}
