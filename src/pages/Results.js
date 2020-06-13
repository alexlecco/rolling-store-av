import React, { Component, Fragment } from 'react';
import { Layout, Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';
const { Content } = Layout;

export default class Results extends Component {
  getSpanWidth(quantity) {
    return quantity === 1 ? 24 : quantity === 2 ? 12 : 8
  }

  render() {
    const { results } = this.props;

    return(
      <Layout>
        <Content className="content">
        {
          results.length > 0 ? (
            <Fragment>
              <p> Resultados la de busqueda </p>
              <Row>
                {
                results.map(result => (
                  <Col xs={{ span: 24 }} lg={{ span: this.getSpanWidth(results.length) }}>
                    <ProductCard key={result.id} product={result} />
                  </Col>
                ))
                }
              </Row>
            </Fragment>
          ) : (
            <Fragment>
              <p> No se encontraron resultados </p>
            </Fragment>
          )
        }
        </Content>
      </Layout>
    )
  }
}