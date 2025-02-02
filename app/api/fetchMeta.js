import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const html = response.data;
    const $ = cheerio.load(html);
    const description =
      $('meta[name="description"]').attr("content") || "No description found";

    res.status(200).json({ description });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch meta description" });
  }
}
