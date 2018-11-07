import React, {Component} from "react";
import PropTypes from "prop-types";
import CurrencyFormat from 'react-currency-format';

class SelectedProductItem extends Component{

  constructor(){
    super();
  }

  render(){
    const { product, click } = this.props;
    const price = product.price * product.units;
    let discountedPrice = price - ((product.discount * price)/100);
    return(
      <li key={product.id} onClick={(e) => click(product)}>
        <span className="prod product-name">{product.name}</span>
        <CurrencyFormat value={discountedPrice} displayType={'text'}
                      thousandSeparator={true} prefix={'S/'}
                      decimalScale={2} fixedDecimalScale={true}
                      className="prod product-price" />

        <span className="product-quantity">
          <em>{product.units}</em>
          <CurrencyFormat value={product.price} displayType={'text'}
                      thousandSeparator={true} prefix={' Unidad(es) a S/ '}
                      decimalScale={2} fixedDecimalScale={true} suffix={' por unidad'} />
        </span>
        {
          product.discount > 0 ? <span className="product-discount">
            <CurrencyFormat value={product.discount} displayType={'text'}
                      thousandSeparator={true} suffix={'% de descuento'} prefix={'Con un '}
                      decimalScale={2} fixedDecimalScale={true} /></span> : ''
        }
      </li>);
  }

}

SelectedProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired
}

export default SelectedProductItem;

