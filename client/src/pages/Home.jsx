import { Link } from "react-router-dom";
import ListingCard from "../components/ListingCard";

function Home({ listings }) {
  const latestListings = listings.slice(0, 3);

  return (
    <main>

      <section className="bg-gray-100 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">
          HyperLocal
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          Buy & Sell Things Nearby
        </p>

        <Link
          to="/listings"
          className="mt-6 inline-block rounded bg-black px-5 py-3 text-white"
        >
          Browse Listings
        </Link>
      </section>


      <section className="mx-auto max-w-6xl px-6 py-10">

        <h2 className="text-2xl font-bold">
          Latest Listings
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {latestListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;