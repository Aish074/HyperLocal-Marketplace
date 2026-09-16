function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search listings..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
    />
  );
}

export default SearchBar;