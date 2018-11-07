import React, {Component} from "react";
import PropTypes from "prop-types";
import CurrencyFormat from 'react-currency-format';

class ProductItem extends Component{

  constructor(){
    super();
  }

  render(){
    const { product, click } = this.props;
    let imgSrc = `https://demo2.odoo.com/web/image?model=product.product&field=image_medium&id=${product.id}`;
    return(
    <div className="product" onClick={(e) => {click(product)}}>
      <div className="prod-img">
        <img src={imgSrc} />
      </div>
      <span className="name">{product.display_name}</span>
      <CurrencyFormat value={product.lst_price} displayType={'text'}
                      thousandSeparator={true} prefix={'S/'}
                      decimalScale={2} fixedDecimalScale={true}
                      className="price" />
    </div>);
  }

}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired
}

export default ProductItem;

