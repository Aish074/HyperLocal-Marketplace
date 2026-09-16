import ListingCard from "../components/ListingCard";
import listings from "../data/listings";

function Listings() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-8">

      <h1 className="text-3xl font-bold">
        Browse Listings
      </h1>

      <p className="mt-2 text-gray-600">
        Find things being sold near you.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
          />
        ))}

      </div>

    </main>
  );
}

export default Listings;