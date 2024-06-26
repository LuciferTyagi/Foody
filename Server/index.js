import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001; // Choose a port for your proxy server

// Enable CORS
app.use(cors());

// Define your Swiggy API endpoint
const SWIGGY_API_BASE_URL = "https://www.swiggy.com/dapi/restaurants/list/v5";

// Function to determine if the request is from a mobile device
function isMobileDevice(userAgent) {
  const mobileKeywords = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
  return mobileKeywords.some(keyword => userAgent.includes(keyword));
}

// Define your proxy route
app.get("/api/res", async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const timestamp = Date.now();
    const limit = 20; // Number of results you want to fetch
    const offset = 0; // Offset for pagination, if you want to fetch the next set of results, you would increment this

    // Determine the platform based on the user agent
    const userAgent = req.headers["user-agent"];
    const isMobile = isMobileDevice(userAgent);
    const platform = isMobile ? 'MOBILE_WEB_LISTING' : 'DESKTOP_WEB_LISTING';

    // Construct the URL with the appropriate platform
    const url = `${SWIGGY_API_BASE_URL}?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=${platform}&timestamp=${timestamp}&limit=${limit}&offset=${offset}`;

    // Proxy the request to Swiggy API
    const response = await fetch(url, {
      headers: {
        "User-Agent": userAgent,
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

    // Construct the URL to fetch menu data from Swiggy API
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7336001&lng=77.7602283&restaurantId=${restaurantId}`;

    // Proxy the request to Swiggy API
    const response = await fetch(url, {
      headers: {
        "User-Agent": req.headers["user-agent"],
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
