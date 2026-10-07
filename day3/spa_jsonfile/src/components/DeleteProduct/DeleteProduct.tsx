import { useState } from "react";
import type { Product } from "../models/product";
import "./DeleteProduct.css";

interface DeleteProductProps {
  products: Product[];
  onDelete: (id: number) => void;
}

function DeleteProduct({
  products,
  onDelete,
}: DeleteProductProps) {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [message, setMessage] = useState("");

  const findProduct = () => {
    const result = products.find(
      (p) => p.id === Number(productId)
    );

    if (result) {
      setProduct(result);
      setNotFound(false);
    } else {
      setProduct(null);
      setNotFound(true);
    }

    setMessage("");
  };

  const deleteProduct = () => {
    if (!product) return;

    onDelete(product.id);

    setMessage("Product deleted successfully");
    setProduct(null);
    setProductId("");
  };

  return (
    <div className="delete-container">
      <h1>Delete Product</h1>

      <label>Product ID</label>

      <input
        type="number"
        value={productId}
        placeholder="Enter Product ID and press Tab"
        onChange={(e) => setProductId(e.target.value)}
        onBlur={findProduct}
      />

      {notFound && (
        <h1 className="delete-not-found">
          Product not found
        </h1>
      )}

      {product && (
        <div className="delete-product">
          <img
            src={product.image}
            alt={product.title}
          />

          <h2>{product.title}</h2>

          <p>${product.price}</p>

          <p>{product.category}</p>

          <button onClick={deleteProduct}>
            Delete Product
          </button>
        </div>
      )}

      {message && (
        <p className="delete-success">{message}</p>
      )}
    </div>
  );
}

export default DeleteProduct;