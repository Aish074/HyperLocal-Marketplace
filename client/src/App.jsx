import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ListingDetails from "./pages/ListingDetails";
import AddListing from "./pages/AddListing";
import Navbar from "./components/Navbar";

import initialListings from "./data/listings";

function App() {
  const [listings, setListings] = useState(initialListings);

  const addListing = (newListing) => {
    setListings((prevListings) => [
      ...prevListings,
      newListing,
    ]);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home listings={listings} />}
        />

        <Route
          path="/listings"
          element={<Listings listings={listings} />}
        />

        <Route
          path="/listings/:id"
          element={<ListingDetails listings={listings} />}
        />

        <Route
          path="/add-listing"
          element={<AddListing onAddListing={addListing} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
