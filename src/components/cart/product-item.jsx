import React, {Component} from "react";
import PropTypes from "prop-types";

class ProductItem extends Component{

  constructor(){
    super();
  }

  render(){
    const { product, click } = this.props;
    let imgSrc = `https://demo2.odoo.com/web/image?model=product.product&field=image_medium&id=${product.id}`;
    return(
    <div className="product" onClick={(e) => {}}>
      <div className="prod-img">
        <img src={imgSrc} />
      </div>
      <span className="name">{product.display_name}</span>
      <span className="price">{`S/ ${product.lst_price.toFixed(2)}`}</span>
    </div>);
  }

}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired
}

export default ProductItem;

