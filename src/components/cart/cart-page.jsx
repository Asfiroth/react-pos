import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Button from "./num-pad-btn";
import list_products from "../../data/products.json";
import ProductItem from "./product-item";
import SelectedProductItem from "./selected-product-item";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../actions/cart-actions"
import CurrencyFormat from 'react-currency-format';
import {Container} from "reactstrap";
import * as routes from "../../constants/route-paths";

const calculatePrice = (currentProduct) => {
  const price = currentProduct.price * currentProduct.units;
  return price - ((currentProduct.discount * price)/100);
}

class CartPage extends Component {

  constructor(){
    super();
    this.state = { option: 'Qty' };
    this.onProductItemClicked = this.onProductItemClicked.bind(this);
    this.selectProductToUpdate = this.selectProductToUpdate.bind(this);
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onOptionClicked = this.onOptionClicked.bind(this);
    this.onRemoveClicked = this.onRemoveClicked.bind(this);
    this.onChangeSignClicked = this.onChangeSignClicked.bind(this);
  }

  onChangeSignClicked(){
    this.props.actions.changeProductSign(this.props.currentItem);
  }

  onRemoveClicked(){
    this.props.actions.removeProduct(this.props.currentItem);
  }

  onButtonClicked(value){
    const {actions, currentItem} = this.props;
    const {option} = this.state;
    switch(option.toUpperCase()){
      case 'QTY':
        actions.updateItemUnits({id: currentItem, units: value});
        break;
      case 'DISC':
        actions.updateItemDiscount({id: currentItem, discount: value});
        break;
      case 'PRICE':
        actions.updateItemPrice({id: currentItem, price: value});
        break;
    }
  }

  onOptionClicked(text){
    this.setState({option: text});
  }

  selectProductToUpdate(product){
    this.props.actions.selectProductItem(product.id);
  }

  onProductItemClicked(product){
    this.props.actions.addToCart({id: product.id, name: product.display_name, price: product.lst_price });
  }



  render(){
    let { option } = this.state;
    let { products } = this.props;
    return(
      <Container fluid={true}>
        <div className="page-root">
          <div className="product-prev">
            <ul className="cart-list">
              {
                products.length > 0 ?
                products.map(product => {
                  return (<SelectedProductItem product={product} click={this.selectProductToUpdate} key={product.id} />);
                })
                :
                <div className="no-items">
                  <span>No hay items en el carrito</span>
                </div>
              }
            </ul>
            <div className="cart-totals">
              <div></div>
              <CurrencyFormat value={products.reduce((previous, current) => previous + calculatePrice(current), 0)} displayType={'text'}
                          thousandSeparator={true} prefix={'Total: S/'}
                          decimalScale={2} fixedDecimalScale={true} />
            </div>
            <div className="actions-pad">
              <div className="pad">
                <NavLink to={routes.checkout}>
                  <Button text="Pagar" size={4} click={(e) => { localStorage.setItem("prods", JSON.stringify(products)) }} type="input"></Button>
                </NavLink>
                <div className="numpad">
                  <Button text="1" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="2" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="3" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="Qty" selected={option} size={1} click={this.onOptionClicked} type="mode"></Button>

                  <Button text="4" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="5" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="6" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="Disc" size={1} selected={option} click={this.onOptionClicked} type="mode"></Button>

                  <Button text="7" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="8" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="9" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="Price" size={1} selected={option} click={this.onOptionClicked} type="mode"></Button>

                  <Button text="+/-" size={1} click={this.onChangeSignClicked} type="input"></Button>
                  <Button text="0" size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="." size={1} click={this.onButtonClicked} type="input"></Button>
                  <Button text="<-" size={1} click={this.onRemoveClicked} type="mode"></Button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-list">
            {list_products.map(product => {
              return  (<ProductItem product={product} click={this.onProductItemClicked} key={product.id} />)
            })}
          </div>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { products: state.cartReducer.products,
           currentItem: state.cartReducer.selectedItem  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
