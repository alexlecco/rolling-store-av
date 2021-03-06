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
import { connect } from "react-redux";
import { getVisibleProducts } from "./reducers/products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: ''
    }
    this.updateTerm = this.updateTerm.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  updateTerm(term) {
    this.setState({ term })
  }

  updateList(newList, term) {
    term !== '' ?
      this.setState({
        results: newList,
        term
      })
    : 
      this.setState({results: []})
  }

  render() {
    const { term, results } = this.state;
    const { products } = this.props
    const updateTerm = this.updateTerm.bind(this);
    const updateList = this.updateList.bind(this);

    return (
      <Router>
        <CustomHeader
          term={term}
          updateTerm={updateTerm}
          updateList={updateList}
          products={products}
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
                <Cart {...props} />
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

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps
)(App)