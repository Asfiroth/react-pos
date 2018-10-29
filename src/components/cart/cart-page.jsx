import React, { Component } from "react";
import Button from "./num-pad-btn";
import products from "../../data/products.json";

class CartPage extends Component {

  constructor(){
    super();
    this.state = { selectedProducts: [], option: 'Qty', selectedProduct: 0 };
    this.onProductItemClicked = this.onProductItemClicked.bind(this);
    this.selectProductToUpdate = this.selectProductToUpdate.bind(this);
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onOptionClicked = this.onOptionClicked.bind(this);
  }

  onProductItemClicked(e, product){
    let { selectedProducts } = this.state;

    const index = selectedProducts.findIndex(prod => prod.id == product.id);

    if(index != -1){
      selectedProducts[index].quantity++;
    }else{
      product.quantity = 1;
      product.discount = 0;
      selectedProducts.push(product);
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
        else qty = parseInt(`${qty}${value}`)

        selectedProducts[selectedProduct].quantity = qty;
        break;
      case "Disc":
        let disc = selectedProducts[selectedProduct].discount;
        disc = parseInt(`${disc}${value}`);

        if(disc >100) disc = 100;

        selectedProducts[selectedProduct].discount = disc;
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

  render(){
    let { selectedProducts, option } = this.state;
    return(
    <div className="page-root">
      <div className="product-prev">
        <ul className="cart-list">
          {
            selectedProducts.map(product => {
              return (
                <li key={product.id} onClick={(e) => this.selectProductToUpdate(e, product)}>
                  <span className="prod product-name">{product.display_name}</span>
                  <span className="prod product-price">{`S/ ${(product.lst_price * product.quantity).toFixed(2)}`}</span>
                  <span className="product-quantity">
                    <em>{product.quantity}</em>
                    Unit(s) at {`S/ ${product.lst_price.toFixed(2)}`} / Unit(s)
                  </span>
                  {
                    product.discount > 0 ? <span className="product-discount">With a {`${product.discount.toFixed(2)}%`} discount.</span> : ''
                  }
                </li>
                );
            })
          }



        </ul>
        <div className="actions-pad">
          <div className="pad">
            <a href="/receipt">
              <Button text="Payment" size={4} type="input"></Button>
            </a>
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

              <Button text="+/-" size={1} click={this.onButtonClicked} type="input"></Button>
              <Button text="0" size={1} click={this.onButtonClicked} type="input"></Button>
              <Button text="." size={1} click={this.onButtonClicked} type="input"></Button>
              <Button text="<-" size={1} click={this.onButtonClicked} type="mode"></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-list">
        {products.map(product => {
          let imgSrc = `https://demo2.odoo.com/web/image?model=product.product&field=image_medium&id=${product.id}`;
          return  (<div className="product" onClick={(e) => this.onProductItemClicked(e, product)} key={product.id}>
                    <div className="prod-img">
                      <img src={imgSrc} />
                    </div>
                    <span className="name">{product.display_name}</span>
                    <span className="price">{`S/ ${product.lst_price.toFixed(2)}`}</span>
                  </div>)
        })}
      </div>
    </div>
    )
  }
}

export default CartPage;
