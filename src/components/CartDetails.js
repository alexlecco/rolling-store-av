import React, { Component, Fragment } from 'react';
import { Radio, Input, Button } from 'antd';

class CartDetails extends Component {
  render() {
    const radioStyle = { display: 'block' };
    const { shippingAddress, creditCard } = this.props

    return(
      <Fragment>
        <div className="cartDetails">
          <p>¿Donde queres recibir tu compra?</p>
          <Input value={shippingAddress}/>
          
          <p>¿Que tarjeta queres usar?</p>
          <Radio.Group onChange={() => {}} value={creditCard}>
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

          <Button onClick={() => {}}>
            Confirmar compra
          </Button>
        </div>
      </Fragment>
    )
  }
}

export default CartDetails