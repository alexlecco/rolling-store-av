import React, { Component, Fragment } from 'react';

export default class ProductCard extends Component {
  getPhoto(prodId) {
    return `https://firebasestorage.googleapis.com/v0/b/rolling-store-av-259fe.appspot.com/o/products%2F${prodId}.png?alt=media`
  }

  render() {
    const { name, brand, price, id } = this.props.product;

    return(
      <Fragment>
        <div className="product-card">
          <div className="product-imageContainer">
            <img src={this.getPhoto(id)} className="product-image" alt="product"/>
          </div>
          <div>producto: {name} </div>
          <div>marca: {brand} </div>
          <div>precio: {price} </div>
        </div>
      </Fragment>
    )
  }
}