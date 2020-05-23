import React, { Component, Fragment } from 'react';
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'

export default class ProductInfo extends Component {
  getPhoto(prodId) {
    return `https://firebasestorage.googleapis.com/v0/b/rolling-store-av-259fe.appspot.com/o/products%2F${prodId}.png?alt=media`
  }

  render() {
    const { name, brand, price, id, description, shippingTime } = this.props.product;
    
    return(
      <Fragment>
        <div className="productInfo">
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <div className="productInfo-imageContainer">
                <img src={this.getPhoto(id)} className="product-image" style={{ height: '50vh' }} alt="product"/>
              </div>
            </Col>
            <br />
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <div className="productInfo-description">
                <div>{`producto: ${name} "${brand}"`} </div>
                <Row>
                  <Col span={12}> <div>precio: {price} </div> </Col>
                  <Col span={12}> <div>llega en: {shippingTime} </div> </Col>
                </Row>
                <br />
                <div style={{ textAlign: 'left' }}>descripción: {description}</div>
                <br />
                
                <Link to={{
                  pathname: '/cart/',
                  state: {
                    product: this.props.product
                  }
                }}>
                  <Button>Comprar</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}