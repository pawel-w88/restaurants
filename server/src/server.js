import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// wir importieren unsere verbindung
// const { connect, closeConnection } = import("./configs/db.js");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const YELP_API_KEY = process.env.YELP_API_KEY;

app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Cotent-Type"],
//   })
// );

// Define a route to fetch data from Yelp API
app.get("/api/yelpData", async (_req, res) => {
  try {
    const yelpResponse = await fetch(
      "https://api.yelp.com/v3/businesses/search?location=Poland&categories=restaurants",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "Access-Control-allow-Orgin": "*",
          Authorization: `Bearer ${YELP_API_KEY}`,
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
