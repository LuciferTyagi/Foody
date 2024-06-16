import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001; // Choose a port for your proxy server

// Enable CORS
app.use(cors());

// Define your Swiggy API endpoint
const SWIGGY_API_BASE_URL = "https://www.swiggy.com/dapi/restaurants/list/v5";
const SWIGGY_API_MENU_URL ="https://www.swiggy.com/dapi"
// Define your proxy route
app.get("/api/res", async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const timestamp = Date.now();
    const limit = 20; // Number of results you want to fetch
    const offset = 0; // Offset for pagination, if you want to fetch the next set of results, you would increment this

    const url = `${SWIGGY_API_BASE_URL}?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&timestamp=${timestamp}`;

    // Proxy the request to Swiggy API
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          "Accept": "application/json",
      },
    });

    const data = await response.json();

    // Send the Swiggy API response back to the client
    res.json(data);
  } catch (error) {
    console.error("Error proxying request to Swiggy API:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/menu", async (req, res) => {
  try {
    // Extract restaurantId from query parameters
    const { restaurantId } = req.query;
    // console.log("Restaurant ID:", restaurantId);

    // Construct the URL to fetch menu data from Swiggy API
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7336001&lng=77.7602283&restaurantId=${restaurantId}`;


    // Proxy the request to Swiggy API
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          "Accept": "application/json",
      },
    });
    const data = await response.json();
    

    // Send the menu data back to the client
    res.json(data);
  } catch (error) {
    console.error("Error proxying request to Swiggy API:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
