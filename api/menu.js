// api/menu.js - Vercel Serverless Function
export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
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
    const swiggyUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${restaurantId}`;

    // Use native fetch instead of axios (available in Node.js 18+)
    const response = await fetch(swiggyUrl, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    if (!response.ok) {
      throw new Error(`Swiggy API returned ${response.status}`);
    }

    const data = await response.json();
    
    if (!data) {
      return res.status(502).json({ error: "Empty response from Swiggy" });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching Swiggy menu:", err?.message ?? err);
    return res
      .status(500)
      .json({ error: "Failed to fetch menu", details: err?.message ?? null });
  }
}
