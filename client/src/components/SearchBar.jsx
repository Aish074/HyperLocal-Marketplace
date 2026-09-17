function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search for items..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full rounded-md border border-[#E5E1D6] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none placeholder:text-[#8A8577] focus:border-[#1F4D3D] focus:ring-1 focus:ring-[#1F4D3D] sm:flex-1"
    />
  );
}

export default SearchBar;