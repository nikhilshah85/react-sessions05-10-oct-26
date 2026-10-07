import { useState } from "react";
import type { Product } from "../models/product";
import "./UpdateProduct.css";

interface UpdateProductProps {
  products: Product[];
  onUpdate: (product: Product) => void;
}

function UpdateProduct({
  products,
  onUpdate,
}: UpdateProductProps) {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [message, setMessage] = useState("");

  const findProduct = () => {
    const result = products.find(
      (p) => p.id === Number(productId)
    );

    if (result) {
      setProduct({ ...result });
      setNotFound(false);
    } else {
      setProduct(null);
      setNotFound(true);
    }

    setMessage("");
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!product) return;

    onUpdate(product);
    setMessage("Product updated successfully");
  };

  return (
    <div className="update-container">
      <h1>Update Product</h1>

      <label>Product ID</label>

      <input
        type="number"
        value={productId}
        placeholder="Enter Product ID and press Tab"
        onChange={(e) => setProductId(e.target.value)}
        onBlur={findProduct}
      />

      {notFound && (
        <h1 className="update-not-found">
          Product not found
        </h1>
      )}

      {product && (
        <form onSubmit={handleUpdate}>
          <label>Title</label>

          <input
            value={product.title}
            onChange={(e) =>
              setProduct({
                ...product,
                title: e.target.value,
              })
            }
          />

          <label>Price</label>

          <input
            type="number"
            step="0.01"
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: Number(e.target.value),
              })
            }
          />

          <label>Description</label>

          <textarea
            value={product.description}
            onChange={(e) =>
              setProduct({
                ...product,
                description: e.target.value,
              })
            }
          />

          <label>Category</label>

          <input
            value={product.category}
            onChange={(e) =>
              setProduct({
                ...product,
                category: e.target.value,
              })
            }
          />

          <label>Image URL</label>

          <input
            value={product.image}
            onChange={(e) =>
              setProduct({
                ...product,
                image: e.target.value,
              })
            }
          />

          <label>Rating</label>

          <input
            type="number"
            step="0.1"
            value={product.rating.rate}
            onChange={(e) =>
              setProduct({
                ...product,
                rating: {
                  ...product.rating,
                  rate: Number(e.target.value),
                },
              })
            }
          />

          <label>Rating Count</label>

          <input
            type="number"
            value={product.rating.count}
            onChange={(e) =>
              setProduct({
                ...product,
                rating: {
                  ...product.rating,
                  count: Number(e.target.value),
                },
              })
            }
          />

          <button type="submit">
            Update Product
          </button>
        </form>
      )}

      {message && (
        <p className="update-success">{message}</p>
      )}
    </div>
  );
}

export default UpdateProduct;