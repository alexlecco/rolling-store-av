import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Results from './components/Results';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Alex',
      products: [
        {
          id: 'prod1',
          name: 'notebook',
          brand: 'Asus',
          price: 19000
        },
        {
          id: 'prod1',

          name: 'zapatillas',
          brand: 'Nike',
          price: 3500
        },
        {
          id: 'prod1',
          name: 'juego de ps4',
          brand: 'Dark Souls',
          price: 5000
        }
      ]
    }
  }

  render() {
    const { userName, products } = this.state;

    return (
        <div className='App-container'>
          <Main userName={userName} products={products} />
        </div>
    );
  }
}