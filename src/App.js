import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Results from './components/Results';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      ],
      results: [],
      term: ''
    }
  }

  updateTerm(term) {
    this.setState({ term })
  }

  render() {
    const { userName, products, term } = this.state;
    const updateTerm = this.updateTerm.bind(this);

    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="App-container">
              <Main
                userName={userName}
                products={products}
                updateTerm={updateTerm}
                term={term}
              />
            </div>
          </Route>

          <Route path="/results">
            <div className="App-container">
              <Results
                userName={userName}
                products={products}
              />
            </div>
          </Route>
        </Switch>
      </Router>

    );
  }
}