import React from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends React.Component {


  render(){

    return (
      <nav>
            <Link to="/">Home</Link>
            <Link to="/productslist">Products</Link>
            <Link to="/searchproduct">Search</Link>
            <Link to="/addproduct">Add Product</Link>
            <Link to="/updateproduct">Update Product</Link>
            <Link to="/deleteproduct">Delete Product</Link>
      </nav>
    )
  }
}