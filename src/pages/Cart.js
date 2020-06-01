import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout, Row, Col } from 'antd';
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import ProductCard from '../components/ProductCard'
import CartDetails from '../components/CartDetails'
const { Content } = Layout;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      address: ''
    }
  }

  componentDidMount() {
    const { product } = this.props.location.state
    this.props.updateCart(product)
  }

  render() {
    const { product } = this.props.location.state
    const { updateCart } = this.props

    return(
      <Layout>
        <Content className="content">
          <p> Mi carrito </p>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <ProductCard key={product.id} product={product} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CartDetails product={product} updateCart={updateCart} />
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(Cart)