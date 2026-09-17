import { Link } from "react-router-dom";
import ListingCard from "../components/ListingCard";

function Home({ listings }) {
  const latestListings = listings.slice(0, 3);

  const categories = [
    {
      name: "Electronics",
      description: "Phones, calculators, laptops and more.",
      accent: "border-[#1F4D3D]",
    },
    {
      name: "Furniture",
      description: "Tables, chairs, desks and other items.",
      accent: "border-[#E8A33D]",
    },
    {
      name: "Books",
      description: "Academic books, novels and study material.",
      accent: "border-[#1F4D3D]",
    },
  ];

  return (
    <main>

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-wide text-[#8A8577]">
              Buy, sell, trade nearby
            </p>

            <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[1.05] text-[#1A1A1A] sm:text-6xl">
              Find what's nearby.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#5F5E5A] sm:text-lg">
              Discover useful items from people around you, and connect with
              your local community.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/listings"
                className="rounded-md bg-[#E8A33D] px-6 py-3 text-center text-sm font-semibold text-[#412402] transition hover:bg-[#D99632]"
              >
                Browse listings
              </Link>

              <Link
                to="/add-listing"
                className="rounded-md border border-[#1F4D3D] px-6 py-3 text-center text-sm font-semibold text-[#1F4D3D] transition hover:bg-[#1F4D3D] hover:text-white"
              >
                Sell an item
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">

          <p className="text-sm font-medium uppercase tracking-wide text-[#8A8577]">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
            Browse by category
          </h2>

          <div className="mt-9 grid gap-10 sm:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/listings"
                className={`border-l-2 ${category.accent} pl-5 transition hover:translate-x-1`}
              >
                <h3 className="text-lg font-bold text-[#1A1A1A]">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#8A8577]">
                  {category.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-[#1F4D3D]">
                  View items →
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Latest Listings */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-[#8A8577]">
                Recently added
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
                Latest listings
              </h2>
            </div>

            <Link
              to="/listings"
              className="hidden text-sm font-semibold text-[#1F4D3D] hover:underline sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {latestListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
              />
            ))}
          </div>

          <Link
            to="/listings"
            className="mt-6 block text-sm font-semibold text-[#1F4D3D] sm:hidden"
          >
            View all listings →
          </Link>

        </div>
      </section>

      {/* Why HyperLocal */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">

          <p className="text-sm font-medium uppercase tracking-wide text-[#8A8577]">
            Why HyperLocal
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
            A simpler way to trade locally.
          </h2>

          <p className="mt-3 max-w-xl text-base leading-7 text-[#5F5E5A]">
            HyperLocal connects people within the same area, making it easier
            to discover useful items nearby.
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-3">

            <div>
              <div className="text-3xl text-[#1F4D3D]">⌖</div>

              <h3 className="mt-4 text-base font-bold text-[#1A1A1A]">
                Nearby items
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8A8577]">
                Discover products from people in your local area.
              </p>
            </div>

            <div>
              <div className="text-3xl text-[#E8A33D]">+</div>

              <h3 className="mt-4 text-base font-bold text-[#1A1A1A]">
                Simple selling
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8A8577]">
                Create a listing and share what you want to sell.
              </p>
            </div>

            <div>
              <div className="text-3xl text-[#1F4D3D]">♧</div>

              <h3 className="mt-4 text-base font-bold text-[#1A1A1A]">
                Local community
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8A8577]">
                Connect buyers and sellers from nearby locations.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;