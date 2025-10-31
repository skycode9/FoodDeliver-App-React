// api/menu.js
import axios from "axios";

export default async function handler(req, res) {
  // Basic CORS headers for browser preflight & access
  res.setHeader("Access-Control-Allow-Origin", "*"); // for demo use *, better to set your frontend origin
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { restaurantId } = req.query;
  if (!restaurantId) {
    return res.status(400).json({ error: "restaurantId is required" });
  }

  try {
    // Some public Swiggy endpoints are rate-limited or blocked.
    // Adding common headers to mimic browser may help.
    const swiggyUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${restaurantId}`;

    const response = await axios.get(swiggyUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        // Note: don't include sensitive cookies here.
      },
      // timeout optional
      timeout: 10000,
    });

    // If Swiggy returns HTML or non-JSON, handle gracefully
    const data = response?.data;
    if (!data) {
      return res.status(502).json({ error: "Empty response from Swiggy" });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching Swiggy menu:", err?.message ?? err);
    // Helpful debug info for local dev; hide details in production if you want
    return res
      .status(500)
      .json({ error: "Failed to fetch menu", details: err?.message ?? null });
  }
}
