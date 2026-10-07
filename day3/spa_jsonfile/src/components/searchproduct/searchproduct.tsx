import { useState } from "react";
import type { Product } from "../models/product";
import "./searchproduct.css";

interface SearchProps {
  products: Product[];
}

function SearchComponent({ products }: SearchProps) {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [searched, setSearched] = useState(false);

  const searchProduct = () => {
    if (productId === "") {
      setProduct(null);
      setSearched(false);
      return;
    }

    const result = products.find(
      (p) => p.id === Number(productId)
    );

    setProduct(result || null);
    setSearched(true);
  };

  return (
    <div className="search-container">
      <h1>Search Product</h1>

      <div className="search-box">
        <label>Product ID</label>

        <input
          type="number"
          value={productId}
          placeholder="Enter Product ID"
          onChange={(e) => setProductId(e.target.value)}
          onBlur={searchProduct}
        />
      </div>

      {searched && !product && (
        <h1 className="not-found">Product not found</h1>
      )}

      {product && (
        <div className="search-result">
          <img src={product.image} alt={product.title} />

          <h2>{product.title}</h2>

          <p>
            <strong>ID:</strong> {product.id}
          </p>

          <p>
            <strong>Price:</strong> ${product.price}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>{product.description}</p>

          <p>
            Rating: {product.rating.rate} ⭐
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;