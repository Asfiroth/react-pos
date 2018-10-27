import { Menu, Image, Container, Visibility, Segment } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../actions/cart-actions";

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
      <Segment textAlign="center" vertical>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Container  className="nav">
            <span>this is a text for header</span>
          </Container>
        </Visibility>
      </Segment>
    );
  }
}

export default DesktoHeader;
