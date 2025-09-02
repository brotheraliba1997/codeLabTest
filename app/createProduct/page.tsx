"use client";

import { useState } from "react";
import axios from "axios";

export default function CreateProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    barcode: "",
    price: "",
    stockQty: "",
    image: "",
  });

  const [preview, setPreview] = useState<string | null>(null);

  // ✅ Input handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Convert image to Base64
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result as string });
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // ✅ Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/product", {
        ...formData,
        price: parseFloat(formData.price),
        stockQty: parseInt(formData.stockQty),
      });

      alert("Product created successfully!");
      setFormData({
        name: "",
        sku: "",
        barcode: "",
        price: "",
        stockQty: "",
        image: "",
      });
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Error creating product!");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="barcode"
          placeholder="Barcode (optional)"
          value={formData.barcode}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="stockQty"
          placeholder="Stock Quantity"
          value={formData.stockQty}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImage} />

        {/* Image Preview */}
        {preview && (
          <div className="mt-2">
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
