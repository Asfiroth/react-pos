import React, { Component } from "react";
import Header from "../header/DesktopHeader";
import Footer from "../footer/Footer";
import PropTypes from "prop-types";
import { Responsive, Segment } from "semantic-ui-react";

class DesktopLayout extends Component {
  constructor() {
    super();
  }
  render() {
    const { children } = this.props;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Header />
        {children}
      </Responsive>
    );
  }
}
DesktopLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default DesktopLayout;
