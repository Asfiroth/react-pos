import React, { Component } from "react";
import Header from "../header/desktop-header";
import PropTypes from "prop-types";


class DesktopLayout extends Component {
  constructor() {
    super();
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}
DesktopLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default DesktopLayout;
