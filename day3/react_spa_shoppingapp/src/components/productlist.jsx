
// import React from 'react';



// export default class ProductList extends React.Component {


//   render(){

//     return (
//       <div>
//         <h1>List of Products</h1>

//         <table border="1">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Title</th>
//               <th>Price</th>
//               <th>Description</th>
//               <th>Category</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.products.map(product => (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>{product.title}</td>
//                 <td>${product.price.toFixed(2)}</td>
//                 <td>{product.description}</td>
//                 <td>{product.category}</td>
//                 <td><img src={product.image} alt={product.title} style={{width: '100px', height: '100px', borderRadius: '50%'}} /></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//       </div>
//     )
//   }
// }

import React, { Component } from "react";
import "./Products.css";

class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quantities: {}
    };
  }

  increaseQty = (id) => {

    this.setState((prevState) => ({
      quantities: {
        ...prevState.quantities,
        [id]: (prevState.quantities[id] || 1) + 1
      }
    }));

  };

  decreaseQty = (id) => {

    this.setState((prevState) => {

      const currentQty = prevState.quantities[id] || 1;

      return {
        quantities: {
          ...prevState.quantities,
          [id]: currentQty > 1 ? currentQty - 1 : 1
        }
      };

    });

  };

  addToCart = (product) => {

    const qty = this.state.quantities[product.id] || 1;

    console.log("Product Added:", product);
    console.log("Quantity:", qty);

    alert(`${product.title} added to cart. Quantity: ${qty}`);
  };


  render() {

    const { products } = this.props;

    return (
      <div className="products-container">

        {products.map((product) => {

          const qty = this.state.quantities[product.id] || 1;

          return (

            <div className="product-card" key={product.id}>

              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />

              <h3 className="product-title">
                {product.title}
              </h3>

              <p className="product-category">
                {product.category}
              </p>

              <p className="product-description">
                {product.description}
              </p>

              <h2 className="product-price">
                ${product.price}
              </h2>


              <div className="quantity-container">

                <button
                  className="qty-button"
                  onClick={() => this.decreaseQty(product.id)}
                >
                  -
                </button>

                <span className="quantity">
                  {qty}
                </span>

                <button
                  className="qty-button"
                  onClick={() => this.increaseQty(product.id)}
                >
                  +
                </button>

              </div>


              <button
                className="add-cart-button"
                onClick={() => this.addToCart(product)}
              >
                Add to Cart
              </button>

            </div>

          );

        })}

      </div>
    );
  }
}

export default Products;