import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import News from './News';
import Login from './Login';  
class App extends React.Component{
  render(){
    return (
     <BrowserRouter>
        <h1>My SPA App</h1>
    
        <Navbar />
      
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/news" element={ <News/> }/>
          <Route path="/login" element={ <Login/> }/>
        </Routes>
         </BrowserRouter>
    );
  } 
}

export default App;