import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import "./ProductList.css";

function ProductList() {

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string>("");


  // ----------------------------------
  // GET PRODUCTS
  // ----------------------------------

  const getProducts = async () => {

    try {

      const response = await fetch(
        "http://localhost:3001/api/products"
      );

      if (!response.ok) {
        throw new Error(
          "Unable to fetch products"
        );
      }

      const data: Product[] =
        await response.json();

      setProducts(data);

    } catch (error) {

      setError(
        "Unable to load products"
      );

    } finally {

      setLoading(false);

    }

  };


  // ----------------------------------
  // CALL GET WHEN COMPONENT LOADS
  // ----------------------------------

  useEffect(() => {

    getProducts();

  }, []);


  if (loading) {
    return <h1>Loading products...</h1>;
  }


  if (error) {
    return (
      <h1 style={{ color: "red" }}>
        {error}
      </h1>
    );
  }


  return (
    <div className="product-list-container">

      <h1>Products</h1>

      <div className="product-grid">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />

            <h2>{product.title}</h2>

            <p>
              Product ID: {product.id}
            </p>

            <p className="category">
              {product.category}
            </p>

            <p className="description">
              {product.description}
            </p>

            <h3>
              ${product.price}
            </h3>

            <p>
              Rating: {product.rating.rate} ⭐
            </p>

            <p>
              Reviews: {product.rating.count}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProductList;