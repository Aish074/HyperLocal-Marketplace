// Later when listings come from MongoDB, we can make categories dynamic.

function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="rounded-md border border-[#E5E1D6] bg-white px-4 py-3 text-sm font-medium text-[#1A1A1A] outline-none focus:border-[#1F4D3D] focus:ring-1 focus:ring-[#1F4D3D]"
    >
      <option value="All">All Categories</option>
      <option value="Furniture">Furniture</option>
      <option value="Electronics">Electronics</option>
      <option value="Books">Books</option>
    </select>
  );
}

export default CategoryFilter;