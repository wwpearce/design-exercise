import React, { Component } from 'react';

import DesktopBackground from '../images/desktop-bgr.gif';
import MobileBackground from '../images/mobile-bgr.gif';
import './Form.scss';

let isMobile = false;

let background = isMobile ? MobileBackground : DesktopBackground;

let formStyle = {
  backgroundImage: `url(${background})`
};

class Form extends Component {
  state = { show: false };

  showPicker = () => {
    this.setState({ show: true });
    console.log(this.state.show);
  };

  hidePicker = () => {
    this.setState({ show: false });
    console.log(this.state.show);
  };

  render() {
    return (
      <div className="formWrapper">
        <div className="form" style={ formStyle }>
          <div className="hit" onClick={this.showPicker}>hello</div>
        </div>
      </div>
    );
  }
}

export default Form;
