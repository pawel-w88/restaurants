import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const YELP_API_KEY = process.env.YELP_API_KEY;

app.use(express.json());
app.use(cors());

// Define a route to fetch data from Yelp API
app.get("/api/yelpData", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.yelp.com/v3/businesses/search?location=poland&categories=restaurants",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer${YELP_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Yelp API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
