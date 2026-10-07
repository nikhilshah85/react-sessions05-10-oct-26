import { useState } from "react";
import type { Product } from "../models/product";
import "./AddProduct.css";

function AddProduct() {

  const [title, setTitle] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [image, setImage] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [saving, setSaving] =
    useState(false);


  // ----------------------------------
  // ADD PRODUCT
  // ----------------------------------

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    const newProduct = {

      title: title,

      price: Number(price),

      description: description,

      category: category,

      image: image,

      rating: {
        rate: 0,
        count: 0
      }

    };


    try {

      setSaving(true);
      setMessage("");


      const response = await fetch(
        "http://localhost:3001/api/products",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(newProduct)

        }
      );


      if (!response.ok) {

        throw new Error(
          "Unable to add product"
        );

      }


      const addedProduct: Product =
        await response.json();


      setMessage(
        `Product added successfully. ID: ${addedProduct.id}`
      );


      // Clear form

      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setImage("");


    } catch (error) {

      setMessage(
        "Unable to add product"
      );

    } finally {

      setSaving(false);

    }

  };


  return (
    <div className="add-container">

      <h1>Add Product</h1>


      <form onSubmit={handleSubmit}>

        <label>
          Product Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />


        <label>
          Price
        </label>

        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          required
        />


        <label>
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          required
        />


        <label>
          Category
        </label>

        <input
          type="text"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          required
        />


        <label>
          Image URL
        </label>

        <input
          type="text"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          required
        />


        <button
          type="submit"
          disabled={saving}
        >

          {saving
            ? "Adding..."
            : "Add Product"}

        </button>

      </form>


      {message && (
        <p className="success-message">
          {message}
        </p>
      )}

    </div>
  );
}

export default AddProduct;