import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Alex',
      products: [
        {
          id: 'prod01',
          name: 'notebook',
          brand: 'Asus',
          price: 19000
        },
        {
          id: 'prod21',
          name: 'zapatillas',
          brand: 'Nike',
          price: 3500
        },
        {
          id: 'prod03',
          name: 'juego de ps4',
          brand: 'Dark Souls',
          price: 2000
        }
      ]
    }
  }

  render() {
    const { userName, products } = this.state;

    return (
      <div className="App">
        <header className="App-container">
          <Main userName={userName} products={products} />
        </header>
      </div>
    );
  }
}