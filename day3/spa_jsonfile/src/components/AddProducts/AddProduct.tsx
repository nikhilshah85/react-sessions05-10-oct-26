import { useState } from "react";
import type { Product } from "../models/product";
import "./AddProduct.css";

interface AddProductProps {
  products: Product[];
  onAdd: (product: Product) => void;
}

function AddProduct({ products, onAdd }: AddProductProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newId =
      products.length === 0
        ? 1
        : Math.max(...products.map((p) => p.id)) + 1;

    const newProduct: Product = {
      id: newId,
      title,
      price: Number(price),
      description,
      category,
      image,
      rating: {
        rate: 0,
        count: 0,
      },
    };

    onAdd(newProduct);

    setMessage(`Product added successfully. Product ID: ${newId}`);

    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
  };

  return (
    <div className="add-container">
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <label>Product Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Price</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Category</label>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <label>Image URL</label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default AddProduct;