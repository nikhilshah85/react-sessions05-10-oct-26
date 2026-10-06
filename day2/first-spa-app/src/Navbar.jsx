import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component{
  render(){
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/news">News</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    );
  } 
}

export default Navbar;