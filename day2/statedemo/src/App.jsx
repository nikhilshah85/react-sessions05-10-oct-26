import React from 'react';
import Details from './details';
import Product from './products';
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        firstName: "Peter",
        lastName: "Parker",
        age: 25,
        isMarried: false,
        address: {
          street: "20 Ingram Street",
          city: "New York",
          state: "NY"
        },
        productList:[
          {pId:101, pName:"iPhone 14", price: 1200, isInStock: true},
          {pId:102, pName:"Samsung Galaxy S23", price: 1000, isInStock: true},
          {pId:103, pName:"Google Pixel 7", price: 800, isInStock: false},
          {pId:104, pName:"OnePlus 11", price: 700, isInStock: true},
          {pId:105, pName:"Xiaomi 13", price: 600, isInStock: false}
        ],
        counter: 0,
        greetUser: function(guestName){
          alert(`Hello ${guestName}, Welcome to our website!`);
        }
    }
  }


  AddToCounter = () => {
    this.setState({ counter : this.state.counter + 1 });
  }

  DecreaseCounter = () => {
    this.setState({ counter : this.state.counter - 1 });
  }


  render(){
    return (
      <div>
        <h1>State Demo</h1>    

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.AddToCounter}>Add</button>
        <button onClick={this.DecreaseCounter}>Subtract</button>


``<hr/>
        <Details counter={this.state.counter} greetings={this.state.greetUser} />






        {/* <Details fName={this.state.firstName}
          lName={this.state.lastName}   
          city={this.state.address.city} />*/}
        
        <Product pList={this.state.productList} /> 
      </div>
    );
  }


}

