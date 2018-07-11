import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Items from './Items'
import AddItem from './AddItem'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products : [
    { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    shoppingCart : []
  }
}

addToCart = (newItem) => {
  let cart = this.state.shoppingCart
  let arr = this.state.products

  let result = arr.filter(product =>  newItem.products === product.name).reduce(x => x)

  let quantity = newItem.quantity === NaN ? 0 : newItem.quantity

  let resultObj = {
    product: {...result,
    priceInCents: (result.priceInCents/100).toFixed(2)},
    quantity: newItem.quantity
  }

  let cartFilter = cart.filter(item => item.product.name === newItem.products)
  if(cartFilter.length === 1) {
    cartFilter[0].quantity = Number(cartFilter[0].quantity)+ Number(newItem.quantity)
    this.setState({shoppingCart: cart})

  } else {
    cart = [...cart, resultObj]
    this.setState({shoppingCart: cart})
    }
}

total = () => {
  let cart = this.state.shoppingCart
  let totalResult = 0;
  for(let i = 0; i < cart.length; i++) {
    totalResult += cart[i].quantity * cart[i].product.priceInCents
  }
  return totalResult
}

render() {

  return (
    <div className="App">
      <Header />
      <Items list = { this.state.shoppingCart } />
      <AddItem products = { this.state.products }   addToCart={ this.addToCart } total = { this.total }/>
      <Footer />
      </div>
    );
  }
}

export default App;
