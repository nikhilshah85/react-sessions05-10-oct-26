import type { Product } from '../models/product';
import "./Productlist.css";

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className="product-list-container">
      <h1>Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />

            <h2>{product.title}</h2>

            <p className="category">{product.category}</p>

            <p className="description">{product.description}</p>

            <h3>${product.price}</h3>

            <p>
              Rating: {product.rating.rate} ⭐
            </p>

            <p>Reviews: {product.rating.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;