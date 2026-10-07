import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import ProductList from './components/productlist';
import SearchProduct from './components/searchproduct';
import AddProduct from './components/addproduct';
import UpdateProduct from './components/updateproduct';
import DeleteProduct from './components/deleteproduct';
import Home from './components/home';
export default class App extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      products: []
    }

    

    //there is important concept with component called as lifecycle methods in react, 
    // which are called at different stages of component life cycle.
    //  one of them is componentDidMount, which is called after the component is mounted to the DOM.
    //  we can use this method to make API calls and set the state of the component with the data received from the API.
  }

  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      this.setState({products: data})
    }).catch(error => {
      console.log(error);
    })
  } 

  render(){

    return (
      <Router>
        
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/productslist" element={<ProductList products={this.state.products} />} />
          <Route path="/searchproduct" element={<SearchProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/deleteproduct" element={<DeleteProduct />} />
          </Routes>
       
      </Router>
    )
  }
}