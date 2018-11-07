import React, { Component } from "react";
import { Button } from "reactstrap";
import CurrencyFormat from 'react-currency-format';

class CashCalculator extends Component {
  constructor(){
    super();
  }

  render(){
    const {amount, change, cash} = this.props;
    return (
      <div>
        <table>
          <thead>
           <tr>
              <th>Monto total</th>
              <th>Cliente</th>
              <th>Saldo</th>
           </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <CurrencyFormat value={amount} displayType={'text'}
                      thousandSeparator={true} prefix={'S/'}
                      decimalScale={2} fixedDecimalScale={true} />
              </td>
              <td>
                <CurrencyFormat thousandSeparator={true} prefix={'S/'}
                      decimalScale={2} fixedDecimalScale={true} value={cash}
                      onValueChange={(values) => change(values, amount)}  />
              </td>
              <td>
              <CurrencyFormat value={amount - cash} displayType={'text'}
                      thousandSeparator={true} prefix={'S/'}
                      decimalScale={2} fixedDecimalScale={true} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CashCalculator;
