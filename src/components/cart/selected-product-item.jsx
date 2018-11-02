import React, {Component} from "react";
import PropTypes from "prop-types";

class SelectedProductItem extends Component{

  constructor(){
    super();
  }

  render(){
    const { product, click } = this.props;
    const price = product.lst_price * product.quantity;
    let discountedPrice = price - ((product.discount * price)/100);
    return(
      <li key={product.id} onClick={(e) => this.selectProductToUpdate(e, product)}>
        <span className="prod product-name">{product.display_name}</span>
        <span className="prod product-price">{`S/ ${(discountedPrice).toFixed(2)}`}</span>
        <span className="product-quantity">
          <em>{product.quantity}</em> Unit(s) at {`S/ ${product.lst_price.toFixed(2)}`} / Unit(s)
        </span>
        {
          product.discount > 0 ? <span className="product-discount">With a {`${product.discount.toFixed(2)}%`} discount.</span> : ''
        }
      </li>);
  }

}

SelectedProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired
}

export default SelectedProductItem;

