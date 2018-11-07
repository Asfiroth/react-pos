import React, { Component } from "react";
import payments from "../../data/payment-methods.json";
import { Button, Container } from "reactstrap";
import CurrencyFormat from 'react-currency-format';
import CashCalculator from "./cash-calculator";
import { NavLink } from 'react-router-dom';
import * as routes from "../../constants/route-paths";

class CheckoutPage extends Component {
  constructor() {
    super();
    this.onPaymentSelected = this.onPaymentSelected.bind(this);
    this.handleCash = this.handleCash.bind(this);
    this.state = {isCreditCard: true, isReadyToProceed: false, cash: ''}
  }

  onPaymentSelected(paymentId) {
    this.setState({isCreditCard: paymentId === 2, isReadyToProceed: paymentId===2});

  }

  handleCash(values, amount){
    const {formattedValue, value} = values;
    this.setState({cash: value, isReadyToProceed: value>=amount })
  }

  render() {
    const {isCreditCard, isReadyToProceed, cash} = this.state;
    let json = localStorage.getItem("prods");
    let products = JSON.parse(json);
    let total = products.reduce((p, c) => p + c.price, 0);

    let btnStyle = { width: "120px", height: "60px" };

    return (
      <Container>
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
          {
            isCreditCard ?
            <CurrencyFormat value={total} displayType={'text'}
                      thousandSeparator={true} prefix={'S/'}
                      decimalScale={2} fixedDecimalScale={true}
                      className="totals" />
            :
            <CashCalculator amount={total} cash={cash} change={this.handleCash} />
          }
        </div>
        <div >
          {isReadyToProceed ? <NavLink to={routes.payment}><Button color="success" size="lg" block>Pagar</Button></NavLink> : ''}
        </div>
      </Container>
    );
  }
}

export default CheckoutPage;
