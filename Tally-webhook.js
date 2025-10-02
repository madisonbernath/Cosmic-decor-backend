// api/tally-webhook.js

// Minimal working webhook for Tally → Vercel
// This will confirm your setup is correct (no more 404s)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // If you open the URL in a browser (GET), you’ll see this
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    // Tally sends JSON; parse if needed
    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // Log incoming payload (view in Vercel → Logs after a test submission)
    console.log("[TALLY WEBHOOK]", JSON.stringify(payload, null, 2));

    // Respond with simple OK (Tally requires a 200 response)
    return res.status(200).json({ ok: true, received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(200).json({ ok: false, error: "Parse failed" });
  }
}
