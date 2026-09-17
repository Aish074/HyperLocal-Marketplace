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

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      {/* Page heading */}
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-[#8A8577]">
          Marketplace
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#1A1A1A] sm:text-5xl">
          Browse listings
        </h1>

        <p className="mt-3 text-base leading-7 text-[#5F5E5A]">
          Find useful things being sold near you.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />
      </div>

      {/* Results */}
      {filteredListings.length === 0 ? (
        <div className="mt-12 py-16 text-center">
          <h2 className="text-xl font-bold text-[#1A1A1A]">
            No listings found
          </h2>

          <p className="mt-2 text-sm text-[#8A8577]">
            Try a different search term or category.
          </p>
        </div>
      ) : (
        <>
          <p className="mt-9 text-sm font-medium text-[#8A8577]">
            {filteredListings.length} listing
            {filteredListings.length !== 1 && "s"} found
          </p>

          <div className="mt-5 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
              />
            ))}
          </div>
        </>
      )}

    </main>
  );
}

export default Listings;