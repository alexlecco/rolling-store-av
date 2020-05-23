import React, { Component, Fragment } from 'react';
import { Radio, Input, Button } from 'antd';

export default class CartDetails extends Component {
  state = {
    card: '',
    address: ''
  }
  
  onSelectCard = e => {
    this.setState({ card: e.target.value });
  }

  onWriteAddress = e => {
    this.setState({ address: e.target.value });
  }

  render() {
    const radioStyle = { display: 'block' };
    const { card, address } = this.state;
    const { product, updateCart } = this.props

    return(
      <Fragment>
        <div className="cartDetails">
          <p>¿Donde queres recibir tu compra?</p>
          <Input value={address} onChange={this.onWriteAddress} />
          
          <p>¿Que tarjeta queres usar?</p>
          <Radio.Group onChange={this.onSelectCard} value={card}>
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

          <Button onClick={() => updateCart(product, card, address)}>
            Confirmar compra
          </Button>
        </div>
      </Fragment>
    )
  }
}