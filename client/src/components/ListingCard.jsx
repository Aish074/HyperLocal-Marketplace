import { Link } from "react-router-dom";

function ListingCard({ listing }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">

      <h2 className="text-xl font-semibold">
        {listing.title}
      </h2>

      <p className="mt-2 text-lg font-bold">
        ₹{listing.price}
      </p>

      <p className="mt-1 text-sm text-gray-600">
        {listing.category}
      </p>

      <p className="mt-1 text-sm text-gray-600">
        Condition: {listing.condition}
      </p>

      <p className="mt-1 text-sm text-gray-600">
        Location: {listing.location}
      </p>

      <Link
        to={`/listings/${listing.id}`}
        className="mt-4 inline-block rounded bg-black px-4 py-2 text-sm text-white"
      >
        View Details
      </Link>

    </div>
  );
}

export default ListingCard;