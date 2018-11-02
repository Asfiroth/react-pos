import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Button from "./num-pad-btn";
import products from "../../data/products.json";
import ProductItem from "./product-item";
import SelectedProductItem from "./selected-product-item";

class CartPage extends Component {

  constructor(){
    super();
    this.state = { selectedProducts: [], option: 'Qty', selectedProduct: 0 };
    this.onProductItemClicked = this.onProductItemClicked.bind(this);
    this.selectProductToUpdate = this.selectProductToUpdate.bind(this);
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onOptionClicked = this.onOptionClicked.bind(this);
    this.onRemoveClicked = this.onRemoveClicked.bind(this);
    this.onChangeSignClicked = this.onChangeSignClicked.bind(this);
  }

  onProductItemClicked(e, product){
    let { selectedProducts } = this.state;

    const index = selectedProducts.findIndex(prod => prod.id == product.id);

    if(index != -1) {

      selectedProducts[index].quantity++;
    } else {
      let newProd = Object.assign({}, product);
      newProd.quantity = 1;
      newProd.discount = 0;
      selectedProducts.push(newProd);
    }

    this.setState({selectedProducts: selectedProducts});
  }

  onButtonClicked(n){
    let { selectedProducts, option, selectedProduct } = this.state;
    let value = parseInt(n);

    switch(option){
      case "Qty":
        let qty = selectedProducts[selectedProduct].quantity;
        if(qty == 1) qty = value;
        else qty = parseInt(`${qty}${value}`);
        let prod = selectedProducts[selectedProduct];
        selectedProducts[selectedProduct].quantity = qty;
        break;
      case "Disc":
        let disc = selectedProducts[selectedProduct].discount;
        disc = parseInt(`${disc}${value}`);

        if(disc >100) disc = 100;

        selectedProducts[selectedProduct].discount = disc;
        break;
      case "Price":
        let price = selectedProducts[selectedProduct].lst_price;

        break;
    }
    this.setState({selectedProducts: selectedProducts});
  }

  onOptionClicked(text){
    this.setState({option: text});
  }

  selectProductToUpdate(e, product){
    let { selectedProducts } = this.state;
    const selectedProduct = selectedProducts.findIndex(prod => prod.id == product.id);
    this.setState({selectedProduct: selectedProduct});
  }

  onRemoveClicked(product){
    let { selectedProducts, option, selectedProduct } = this.state;
    selectedProducts.splice(selectedProduct)
    this.setState({selectedProducts: selectedProducts});
  }

  onChangeSignClicked(){
    let { selectedProducts, selectedProduct } = this.state;
    selectedProducts[selectedProduct].lst_price *=-1;
    this.setState({selectedProducts: selectedProducts});
  }

  render(){
    let { selectedProducts, option } = this.state;
    return(
    <div className="page-root">
      <div className="product-prev">
        <ul className="cart-list">
          {
            selectedProducts.map(product => {

              return (<SelectedProductItem product={product} click={this.selectProductToUpdate} />);
            })
          }
        </ul>
        <div className="actions-pad">
          <div className="pad">
            <NavLink to="/receipt">
              <Button text="Payment" size={4} click={(e) => {}} type="input"></Button>
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
        {products.map(product => {
          return  (<ProductItem product={product} click={this.onProductItemClicked} key={product.id} />)
        })}
      </div>
    </div>
    )
  }
}

export default CartPage;
