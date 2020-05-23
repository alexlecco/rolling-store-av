import React, { Component } from 'react'
import { Layout } from 'antd'
import ProductInfo from '../components/ProductInfo'
const { Content } = Layout

export default class Product extends Component {
  render() {
    const { id } = this.props.match.params
    const { product } = this.props.location.state

    return(
      <Layout>
        <Content className="content">
          <p> Información del producto id: {id} </p>
          <ProductInfo product={product} />
        </Content>
      </Layout>
    )
  }
}