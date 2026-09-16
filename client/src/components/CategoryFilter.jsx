// Later when listings come from MongoDB, we can make categories dynamic.

function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="rounded-lg border px-4 py-3"
    >
      <option value="All">All Categories</option>
      <option value="Furniture">Furniture</option>
      <option value="Electronics">Electronics</option>
      <option value="Books">Books</option>
    </select>
  );
}

export default CategoryFilter;

