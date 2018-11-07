import React, { Component } from "react";
import payments from "../../data/payment-methods.json";
import { Button } from "reactstrap";
import CurrencyFormat from 'react-currency-format';

class CheckoutPage extends Component {
  constructor() {
    super();
    this.onPaymentSelected = this.onPaymentSelected.bind(this);
    this.state = {isCreditCard: false, isReadyToProceed: false}
  }

  onPaymentSelected(paymentId) {
    this.setState({isCreditCard: paymentId === 2})
  }

  render() {
    const {isCreditCard} = this.state;
    let json = localStorage.getItem("prods");
    let products = JSON.parse(json);
    let total = products.reduce((p, c) => p + c.price, 0);

    let btnStyle = { width: "120px", height: "60px" };

    return (
      <div>
        <div className="receipt">
          <div>
            <ul>
              {payments.map(payment => (
                <li
                  key={payment.id}
                  onClick={(e) => this.onPaymentSelected(payment.id)}>
                  <Button color="success" style={btnStyle}>
                    {payment.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <CurrencyFormat value={total} displayType={'text'}
                      thousandSeparator={true} prefix={'S/'}
                      decimalScale={2} fixedDecimalScale={true} />
        </div>
        <div >
          {isCreditCard ? <Button color="success" size="lg" block>Pagar</Button> : ''}
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
