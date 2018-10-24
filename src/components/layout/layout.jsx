import React, { Component } from "react";
import PropTypes from "prop-types";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

class Layout extends Component {
  constructor() {
    super();
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <DesktopLayout>{children}</DesktopLayout>
        <MobileLayout>{children}</MobileLayout>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
