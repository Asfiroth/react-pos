import React, { Component } from "react";
import PropTypes from "prop-types";

class NumPadButton extends Component{

  constructor(){
    super();

  }

  render(){
    let {size, text, icon, click, type, selected} = this.props;
    let padStyle = {
      width: `${54 * size}px`,
      height: `${54 * size}px`,
      lineHeight: `${54 * size}px`
    };
    let padClass = `btn-numpad ${type}-button`;

    if(selected === text) padClass += ' select-mode';
    return(
      <div style={padStyle}
              className={padClass}
              onClick={(e) => click(text)}>
        {text}
      </div>
    );
  }
}

NumPadButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  size: PropTypes.number,
  click: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default NumPadButton;
