import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-sm font-semibold text-[#1F4D3D]"
      : "text-sm font-medium text-[#1A1A1A] hover:text-[#1F4D3D]";

  return (
    <>
      <nav className="border-b border-[#E5E1D6] bg-[#FAF8F4]">
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-6 py-5">

          {/* Left - Logo */}
          <div>
            <Link
              to="/"
              onClick={closeMenu}
              className="text-lg font-bold tracking-tight text-[#1F4D3D]"
            >
              HyperLocal
            </Link>
          </div>

          {/* Center - Navigation */}
          <div className="hidden items-center justify-center gap-8 sm:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/listings" className={navLinkClass}>
              Browse
            </NavLink>
          </div>

          {/* Right - Actions */}
          <div className="hidden items-center justify-end gap-3 sm:flex">
            <Link
              to="/add-listing"
              className="rounded-md bg-[#E8A33D] px-5 py-2.5 text-sm font-semibold text-[#412402] transition hover:bg-[#D99632]"
            >
              Sell
            </Link>

            <button
              className="rounded-md border border-[#1F4D3D] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1F4D3D] transition hover:bg-[#1F4D3D] hover:text-white"
            >
              Login
            </button>
          </div>

          {/* Mobile */}
          <div className="col-span-2 flex items-center justify-end gap-2 sm:hidden">
            <Link
              to="/add-listing"
              className="rounded-md bg-[#E8A33D] px-4 py-2 text-sm font-semibold text-[#412402]"
            >
              Sell
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="rounded-md p-2 text-xl text-[#1A1A1A]"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/35"
            onClick={closeMenu}
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 h-full w-[270px] bg-white shadow-xl">

            <div className="flex justify-end border-b border-[#E5E1D6] px-5 py-5">
              <button
                onClick={closeMenu}
                className="text-xl text-[#1A1A1A]"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col">
              <NavLink
                to="/"
                onClick={closeMenu}
                className="border-b border-[#F1EFE8] px-6 py-5 text-sm font-medium text-[#1A1A1A] hover:bg-[#FAF8F4]"
              >
                Home
              </NavLink>

              <NavLink
                to="/listings"
                onClick={closeMenu}
                className="border-b border-[#F1EFE8] px-6 py-5 text-sm font-medium text-[#1A1A1A] hover:bg-[#FAF8F4]"
              >
                Browse
              </NavLink>

              <button
                onClick={closeMenu}
                className="border-b border-[#F1EFE8] px-6 py-5 text-left text-sm font-medium text-[#1A1A1A] hover:bg-[#FAF8F4]"
              >
                Login
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;