import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main';
import Results from './pages/Results';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Success from './pages/Success';
import CustomFooter from './components/CustomFooter';
import CustomHeader from './components/CustomHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { firebaseApp } from './firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Alex',
      products: [],
      results: [],
      term: '',
      cart: []
    }
    this.updateTerm = this.updateTerm.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.updateList = this.updateList.bind(this);
    this.saludar = this.saludar.bind(this);

    this.productsRef = firebaseApp.database().ref().child('products');
  }

  componentDidMount() {
    this.listenForProducts(this.productsRef);
  }

  listenForProducts(productsRef) {
    productsRef.on('value', snap => {
      let products = [];
      snap.forEach(child => {
        products.push({
          name: child.val().name,
          brand: child.val().brand,
          price: child.val().price,
          description: child.val().description,
          shippingTime: child.val().shippingTime,
          id: child.val().id
        });
      });

      this.setState({ products });
    });
  }

  saludar() {
    alert("hola")
  }

  updateTerm(term) {
    this.setState({ term })
  }

  updateCart(prod) {
    this.setState({ cart: [{...prod}] })
  }

  updateList(newList, term) {
    const { products } = this.state;
    term !== '' ?
      this.setState({
        results: newList,
        term
      }) : 
      this.setState({results: products})
  }

  render() {
    const { username, products, term, results } = this.state;
    const updateTerm = this.updateTerm.bind(this);
    const updateCart = this.updateCart.bind(this);
    const updateList = this.updateList.bind(this);
    const saludar = this.saludar.bind(this);

    return (
      <Router>
        <CustomHeader
          username={username}
          term={term}
          updateTerm={updateTerm}
          updateList={updateList}
          products={products}
          saludar={saludar}
        />
 
        <Switch>
          <Route path="/results">
            <div className='App-container'>
              <Results
                results={results}
              />
            </div>
          </Route>

          <Route
            path="/product/:id"
            render={props =>
              <div className='App-container'>
                <Product {...props} />
              </div>
            }>
          </Route>

          <Route 
            path="/cart"
            render={props =>
              <div className='App-container'>
                <Cart {...props} updateCart={updateCart} />
              </div>  
            }>
          </Route>

          <Route path="/success">
            <div className='App-container'>
              <Success
              />
            </div>
          </Route>

          <Route path="/">
            <div className='App-container'>
              <Main
                products={products}
              />
            </div>
          </Route>
        </Switch>

        <CustomFooter />
      </Router>
    );
  }
}