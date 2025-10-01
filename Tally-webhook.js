export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  console.log("Tally sent:", req.body)

  // For now just echo back the form data
  res.status(200).json({ ok: true, received: req.body })
}
