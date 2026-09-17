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
      price: Number(formData.price),
    };

    onAddListing(newListing);

    navigate("/listings");
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">

      {/* Heading */}
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-[#8A8577]">
          Sell something
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#1A1A1A] sm:text-5xl">
          Add a listing
        </h1>

        <p className="mt-3 text-base leading-7 text-[#5F5E5A]">
          Add the details of the item you want to sell.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-9 rounded-lg border border-[#E5E1D6] bg-white p-6 sm:p-9"
      >
        <div className="space-y-7">

          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Study Table"
              required
              className="w-full rounded-md border border-[#E5E1D6] px-4 py-3 text-sm outline-none focus:border-[#1F4D3D]"
            />
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g. 1500"
              required
              className="w-full rounded-md border border-[#E5E1D6] px-4 py-3 text-sm outline-none focus:border-[#1F4D3D]"
            />
          </div>

          {/* Category + Condition */}
          <div className="grid gap-7 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-md border border-[#E5E1D6] bg-white px-4 py-3 text-sm outline-none focus:border-[#1F4D3D]"
              >
                <option value="Furniture">Furniture</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
                Condition
              </label>

              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full rounded-md border border-[#E5E1D6] bg-white px-4 py-3 text-sm outline-none focus:border-[#1F4D3D]"
              >
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Used">Used</option>
              </select>
            </div>

          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Dehradun"
              required
              className="w-full rounded-md border border-[#E5E1D6] px-4 py-3 text-sm outline-none focus:border-[#1F4D3D]"
            />
          </div>

          {/* Seller */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Seller name
            </label>

            <input
              type="text"
              name="seller"
              value={formData.seller}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full rounded-md border border-[#E5E1D6] px-4 py-3 text-sm outline-none focus:border-[#1F4D3D]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your item..."
              rows="6"
              required
              className="w-full resize-none rounded-md border border-[#E5E1D6] px-4 py-3 text-sm outline-none focus:border-[#1F4D3D]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-[#E8A33D] px-5 py-3.5 text-sm font-bold text-[#412402] transition hover:bg-[#D99632]"
          >
            Add listing
          </button>

        </div>
      </form>

    </main>
  );
}

export default AddListing;