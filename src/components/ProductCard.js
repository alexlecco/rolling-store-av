import React, { Component, Fragment } from 'react';
import { Col } from 'antd';

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                    <div className="product-card">
                        <div>producto: {this.props.product.name} </div>
                        <div>marca: {this.props.product.brand} </div>
                        <div>precio: {this.props.product.price} </div>
                    </div>
            </Fragment>
        )
    }
}