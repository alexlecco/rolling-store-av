import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ProductCard extends Component {
  getPhoto(prodId) {
    return `https://firebasestorage.googleapis.com/v0/b/rolling-store-av-259fe.appspot.com/o/products%2F${prodId}.png?alt=media`
  }

  render() {
    const { name, brand, price, id } = this.props.product;

    return(
      <Link to= {{
          pathname: '/product/' + id,
          state: {
            product: this.props.product
          }
        }}
      >
        <div style={{ cursor: 'pointer', margin: 20 }}>
          <div className="product-card">
            <div className="product-imageContainer">
              <img src={this.getPhoto(id)} className="product-image" alt="product"/>
            </div>
            <div>producto: {name} </div>
            <div>marca: {brand} </div>
            <div>precio: {price} </div>
          </div>
        </div>  
      </Link>
    )
  }
}