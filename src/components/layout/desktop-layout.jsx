import React, { Component } from "react";
import Header from "../header/desktop-header";
import PropTypes from "prop-types";
import {Container} from "reactstrap";

class DesktopLayout extends Component {
  constructor() {
    super();
  }
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Header />
        {children}
      </Container>
    );
  }
}
DesktopLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default DesktopLayout;
