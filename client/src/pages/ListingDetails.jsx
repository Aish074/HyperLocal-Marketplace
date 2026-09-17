import { Link, useParams } from "react-router-dom";

function ListingDetails({ listings }) {
  const { id } = useParams();

  const listing = listings.find(
    (item) => item.id === Number(id)
  );

  if (!listing) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="border border-[#E5E1D6] bg-white p-10 text-center">
          <h1 className="text-3xl font-bold text-[#1A1A1A]">
            Listing not found
          </h1>

          <Link
            to="/listings"
            className="mt-5 inline-block text-sm font-semibold text-[#1F4D3D]"
          >
            ← Back to listings
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <Link
        to="/listings"
        className="text-sm font-medium text-[#8A8577] hover:text-[#1F4D3D]"
      >
        ← Back to listings
      </Link>

      <div className="mt-7 overflow-hidden rounded-lg border border-[#E5E1D6] bg-white">

        {/* Product image */}
        <div className="flex h-72 items-center justify-center bg-[#F1EFE8] sm:h-80">
          <span className="text-sm font-medium text-[#8A8577]">
            Product image
          </span>
        </div>

        <div className="p-7 sm:p-10">

          <div className="flex flex-col justify-between gap-5 sm:flex-row">

            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-[#8A8577]">
                {listing.category}
              </p>

              <h1 className="mt-2 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">
                {listing.title}
              </h1>
            </div>

            <p className="text-3xl font-bold text-[#E8A33D]">
              ₹{listing.price}
            </p>

          </div>

          {/* Tags */}
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="bg-[#F1EFE8] px-3 py-1.5 text-sm font-medium text-[#5F5E5A]">
              {listing.condition}
            </span>

            <span className="bg-[#F1EFE8] px-3 py-1.5 text-sm font-medium text-[#5F5E5A]">
              📍 {listing.location}
            </span>
          </div>

          {/* Description */}
          <div className="mt-10 border-t border-[#E5E1D6] pt-8">

            <h2 className="text-xl font-bold text-[#1A1A1A]">
              Description
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5F5E5A]">
              {listing.description}
            </p>

          </div>

          {/* Seller */}
          <div className="mt-10 border-t border-[#E5E1D6] pt-8">

            <h2 className="text-xl font-bold text-[#1A1A1A]">
              Seller
            </h2>

            <p className="mt-3 text-base text-[#5F5E5A]">
              {listing.seller}
            </p>

          </div>

          <button className="mt-8 rounded-md bg-[#E8A33D] px-6 py-3 text-sm font-semibold text-[#412402] transition hover:bg-[#D99632]">
            Contact Seller
          </button>

        </div>
      </div>

    </main>
  );
}

export default ListingDetails;