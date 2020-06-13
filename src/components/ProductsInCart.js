import React, { Component } from 'react'
import { Row, Col } from 'antd'

class ProductsInCart extends Component {
  getPhoto(prodId) {
    return `https://firebasestorage.googleapis.com/v0/b/rolling-store-av-259fe.appspot.com/o/products%2F${prodId}.png?alt=media`
  }

  render() {
    const { products } = this.props;
    
    return(
      <div>
        <h3 style={{textAlign: 'center', color: 'white'}}>productos en Carrito</h3>
        {
          products.map(({ name, brand, price, id, quantity }) => (
            <div style={{ margin: 20 }}>
              <div className="productInCart">
                <div>{name} {brand}</div>
                <div>subtotal: {quantity} x ${price} = ${quantity*price} </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ProductsInCart