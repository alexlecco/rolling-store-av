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
        <h3 style={{textAlign: 'center'}}>productos en Carrito</h3>
        {
          products.map(({ name, brand, price, id, quantity }) => (
            <div style={{ margin: 20 }}>
              <div className="productInCart">
                <Row>
                  <Col xl={{span: 10}} xs={{span:24}}>
                    <div className="productInCart-imageContainer">
                      <img src={this.getPhoto(id)} className="productInCart-image" alt="product"/>
                    </div>
                  </Col>
                  <Col xl={{span: 14}} xs={{span:24}}>
                    <div style={{ marginLeft: 10 }}>
                      <div>{name} {brand}</div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div style={{textAlign: 'center'}}>subtotal: {quantity} x ${price} = ${quantity*price} </div>
                </Row>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ProductsInCart