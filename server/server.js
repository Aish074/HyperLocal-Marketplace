import express from "express"
import listings from "./data/listings.js"

const app = express();

const PORT = 8000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("HyperLocal API is running");
});



//get all listings
app.get("/listings", async(req,res) => {
  res.json(listings);
});

// Get one listing
app.get("/listings/:id", (req, res) => {
  const id = Number(req.params.id);

  const listing = listings.find((item) => item.id === id);

  if (!listing) {
    return res.status(404).json({
      message: "Listing not found",
    });
  }

  res.json(listing);
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});