import { Link, useParams } from "react-router-dom";
//backend not introduced yet ...
function ListingDetails({ listings }) {
  const { id } = useParams();

  const listing = listings.find(
    (item) => item.id === Number(id)
  );

  if (!listing) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-2xl font-bold">Listing not found</h1>

        <Link
          to="/listings"
          className="mt-4 inline-block text-blue-600"
        >
          Back to Listings
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <Link
        to="/listings"
        className="text-sm text-gray-600 hover:text-black"
      >
        ← Back to Listings
      </Link>

      <div className="mt-6 rounded-lg border p-6">
        <h1 className="text-3xl font-bold">{listing.title}</h1>

        <p className="mt-4 text-2xl font-bold">
          ₹{listing.price}
        </p>

        <div className="mt-6 space-y-2">
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {listing.category}
          </p>

          <p>
            <span className="font-semibold">Condition:</span>{" "}
            {listing.condition}
          </p>

          <p>
            <span className="font-semibold">Location:</span>{" "}
            {listing.location}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Description</h2>

          <p className="mt-2 text-gray-600">
            {listing.description}
          </p>
        </div>

        <div className="mt-6 border-t pt-6">
          <h2 className="text-xl font-semibold">Seller</h2>

          <p className="mt-2 text-gray-600">
            {listing.seller}
          </p>
        </div>

        <button className="mt-8 rounded bg-black px-5 py-3 text-white">
          Contact Seller
        </button>
      </div>
    </main>
  );
}

export default ListingDetails;