import { Link } from "react-router-dom";

function ListingCard({ listing }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#E5E1D6] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Image placeholder */}
      <div className="flex h-44 items-center justify-center bg-[#F1EFE8]">
        <span className="text-sm font-medium text-[#8A8577]">
          No image
        </span>
      </div>

      <div className="p-5">

        <div className="flex items-start justify-between gap-4">

          <h2 className="text-lg font-bold leading-tight text-[#1A1A1A]">
            {listing.title}
          </h2>

          <p className="whitespace-nowrap text-lg font-bold text-[#E8A33D]">
            ₹{listing.price}
          </p>

        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-[#8A8577]">
          <span>{listing.category}</span>
          <span>•</span>
          <span>{listing.condition}</span>
        </div>

        <p className="mt-2 text-sm text-[#8A8577]">
          📍 {listing.location}
        </p>

        <Link
          to={`/listings/${listing.id}`}
          className="mt-5 block rounded-md bg-[#1F4D3D] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#173C30]"
        >
          View details
        </Link>

      </div>
    </div>
  );
}

export default ListingCard;