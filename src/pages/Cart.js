import React, { Component } from 'react';
import { Layout } from 'antd';
import ProductCard from '../components/ProductCard';
const { Content } = Layout;

export default class Cart extends Component {
  componentDidMount() {
    const { product } = this.props.location.state
    this.props.updateCart(product)
  }

  render() {
    const { product } = this.props.location.state
    
    return(
      <Layout>
        <Content className="content">
          <p> Mi carrito </p>
          <ProductCard product={product} />
        </Content>
      </Layout>
    )
  }
}