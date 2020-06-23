import React, { Component, Fragment } from 'react';
import { Radio, Input, Button } from 'antd';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkoutCart } from '../actions'
import { getTotal } from '../reducers'
import { Link } from 'react-router-dom'

class CartDetails extends Component {
  state = {
    creditCard: this.props.creditCard,
    shippingAddress: this.props.shippingAddress
  }

  onWriteAddress = e => {
    this.setState({ shippingAddress: e.target.value })
  }

  onSelectCreditCard = e => {
    this.setState({ creditCard: e.target.value })
  }

  validateButton = () => {
    return this.state.creditCard === '' || this.state.shippingAddress === ''
  }

  render() {
    const radioStyle = { display: 'block' };
    const { shippingAddress, creditCard } = this.state
    const { total, checkoutCart } = this.props

    return(
      <Fragment>
        <h3 style={{textAlign: 'center', color: 'white'}}>Resumen de compra</h3>
        <div className="cartDetails">
          <p>Total: ${ total }</p>

          <p>¿Donde queres recibir tu compra?</p>
          <Input value={shippingAddress} onChange={this.onWriteAddress} />
          
          <p>¿Que tarjeta queres usar?</p>
          <Radio.Group value={creditCard} onChange={this.onSelectCreditCard}>
            <Radio style={radioStyle} value={'visa-credito'}>
              <p style={{ color: 'white' }}>Visa Credito</p>
            </Radio>
            <Radio style={radioStyle} value={'visa-debito'}>
              <p style={{ color: 'white' }}>Visa Debito</p>
            </Radio>
            <Radio style={radioStyle} value={'master-debito'}>
              <p style={{ color: 'white' }}>Master Card debito</p>
            </Radio>
          </Radio.Group>

          <Link to={{ pathname: '/success' }}>
            <Button onClick={() => checkoutCart(shippingAddress, creditCard)} disabled={this.validateButton()}>
              Confirmar compra
            </Button>
          </Link>
        </div>
      </Fragment>
    )
  }
}

CartDetails.propTypes = {
  total: PropTypes.string.isRequired,
  checkoutCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkoutCart }
)(CartDetails)