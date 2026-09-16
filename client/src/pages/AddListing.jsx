import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddListing({ onAddListing }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "Furniture",
    condition: "Good",
    location: "",
    description: "",
    seller: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newListing = {
      id: Date.now(),
      ...formData,
      price: Number(formData.price), //using number() cuz Form input values generally come to us as strings.
    };

    onAddListing(newListing);

    navigate("/listings");
  };

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-3xl font-bold">
        Add a Listing
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        <div>
          <label className="mb-2 block font-medium">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="e.g. Study Table"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Price
          </label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="e.g. 1500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          >
            <option value="Furniture">Furniture</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Condition
          </label>

          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          >
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Used">Used</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="e.g. Dehradun"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Seller Name
          </label>

          <input
            type="text"
            name="seller"
            value={formData.seller}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            rows="5"
            placeholder="Describe your item..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white"
        >
          Add Listing
        </button>
      </form>
    </main>
  );
}

export default AddListing;