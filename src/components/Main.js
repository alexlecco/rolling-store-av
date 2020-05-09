import React, { Component, Fragment } from 'react';
import logo from '../logo.png';

export default class Main extends Component {
    render() {
        return(
            <Fragment>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </Fragment>
        )
    }
}