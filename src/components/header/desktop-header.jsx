import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../actions/cart-actions";
import {Container} from "reactstrap";

class DesktoHeader extends Component {
  constructor() {
    super();
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.state = { fixed: false };
  }

  onClickMenuItem(e, { name }) {
    this.props.actions.navigateTo(name);
  }

  hideFixedMenu() {
    this.setState({ fixed: false });
  }

  showFixedMenu() {
    this.setState({ fixed: true });
  }

  render() {
    const { fixed } = this.state;
    let { activeItem } = this.props;
    return (
      <div className="header">
        <Container>
          <a href="https://www.dmsfact.com/">
            <img width="525" height="161" src="https://www.dmsfact.com/wp-content/uploads/2018/06/dms_logo2-1024x315.png" />
          </a>
        </Container>
      </div>
    );
  }
}

export default DesktoHeader;
