import React, { Component } from "react";
import { Button } from "reactstrap";
import CurrencyFormat from 'react-currency-format';

class PrintReceipt extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <span>aquí aparece la boleta para imprimir</span>
      </div>
    )
  }
}

export default PrintReceipt;
