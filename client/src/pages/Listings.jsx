import { useState } from "react";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

function Listings({ listings }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || listing.category === category;

    return matchesSearch && matchesCategory; //so a listing must satify both searchmatches and category matches
  });

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="text-3xl font-bold">Browse Listings</h1>

      <p className="mt-2 text-gray-600">
        Find things being sold near you.
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />
      </div>

      {filteredListings.length === 0 ? (
        <p className="mt-10 text-center text-gray-600">
          No listings found.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Listings;