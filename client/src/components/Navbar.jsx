import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">

      <Link
        to="/"
        className="text-xl font-bold"
      >
        HyperLocal
      </Link>

      <div className="flex gap-6">
        <Link to="/">
          Home
        </Link>

        <Link to="/listings">
          Browse
        </Link>

        <Link to="/add-listing">
          Sell
        </Link>

        <button>
          Login
        </button>
      </div>

    </nav>
  );
}

export default Navbar;