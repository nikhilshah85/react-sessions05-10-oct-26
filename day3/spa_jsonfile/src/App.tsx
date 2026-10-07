import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import productsData from "./assets/products.json";

import type { Product } from "./components/models/product";

import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Productslist/Productslist";
import SearchComponent from "./components/searchproduct/searchproduct";
import AddProduct from "./components/AddProducts/AddProduct";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct/DeleteProduct";

import "./App.css";

function App() {

  const [products, setProducts] =
    useState<Product[]>(productsData);

  // -----------------------------
  // ADD PRODUCT
  // -----------------------------
  const addProduct = (product: Product) => {
    setProducts((currentProducts) => [
      ...currentProducts,
      product,
    ]);
  };

  // -----------------------------
  // UPDATE PRODUCT
  // -----------------------------
  const updateProduct = (updatedProduct: Product) => {

    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

  };

  // -----------------------------
  // DELETE PRODUCT
  // -----------------------------
  const deleteProduct = (id: number) => {

    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== id
      )
    );

  };

  return (
    <>
      <Navbar />

      <main className="main-content">

        <Routes>

          <Route
            path="/"
            element={
              <ProductList
                products={products}
              />
            }
          />

          <Route
            path="/search"
            element={
              <SearchComponent
                products={products}
              />
            }
          />

          <Route
            path="/add"
            element={
              <AddProduct
                products={products}
                onAdd={addProduct}
              />
            }
          />

          <Route
            path="/update"
            element={
              <UpdateProduct
                products={products}
                onUpdate={updateProduct}
              />
            }
          />

          <Route
            path="/delete"
            element={
              <DeleteProduct
                products={products}
                onDelete={deleteProduct}
              />
            }
          />

        </Routes>

      </main>
    </>
  );
}

export default App;