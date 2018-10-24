import React, { Component } from "react";
import PropTypes from "prop-types";
import { Responsive, Sidebar, Segment, Icon } from "semantic-ui-react";

class Mobile extends Component {
  constructor() {
    super();
  }
  render() {
    const { children } = this.props;
    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar.Pusher>
            <Segment>
              <Icon name="sidebar" inverted />
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}
Mobile.propTypes = {
  children: PropTypes.element.isRequired
};
export default Mobile;
