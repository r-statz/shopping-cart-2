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

    this.state = { products : [
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
    shoppingCart : [],
    quantity : 0,
    name : '',
    total: 0
  }
}

addToCart = (newItem) => {
  // console.log(newItem.quantity)
  let arr = this.state.products
  let result = arr.filter(product => product.name === newItem.products)
  let resultObj = {id: 1,
                  product: result[0],
                  quantity: newItem.quantity
                }
  console.log(this.state.shoppingCart.concat(resultObj))
}

render() {

  const ItemsList = [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ]

    return (
      <div className="App">
        <Header />
        <Items list = { ItemsList } />
        <AddItem products = { this.state.products } addToCart={ this.addToCart }/>
        <Footer />
      </div>
    );
  }
}

export default App;
