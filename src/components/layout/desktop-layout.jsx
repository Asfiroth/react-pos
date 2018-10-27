import React, { Component } from "react";
import Header from "../header/desktop-header";
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
