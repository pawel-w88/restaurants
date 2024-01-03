import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import fetch from "node-fetch";
import bodyParser from "body-parser";
dotenv.config();

// wir importieren unsere verbindung
// const { connect, closeConnection } = import("./configs/db.js");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const YELP_API_KEY = process.env.YELP_API_KEY;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to fetch data from Yelp API
app.get("/api/yelpData", async (req, res) => {
  try {
    const yelpResponse = await fetch(
      "https://api.yelp.com/v3/businesses/search?location=poland&categories=restaurants",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer${YELP_API_KEY}`,
        },
      }
    );

    if (!yelpResponse.ok) {
      throw new Error(`Yelp API request failed with status ${yelpResponse.status}`);
    }

    const data = await yelpResponse.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
