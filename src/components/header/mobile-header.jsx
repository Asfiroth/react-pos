import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigationActions from "../../../actions/navigationActions";

class SideBarMenu extends Component {}

const mapStateToProps = (state, ownProps) => {
  return { activeItem: state.navigation.page };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(navigationActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarMenu);
