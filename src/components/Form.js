import React, { Component } from 'react';

import DesktopBackground from '../images/desktop-bgr.gif';
import MobileBackground from '../images/mobile-bgr.gif';
import './Form.scss';

import Picker from './Picker.js';

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

  handleCancel = () => {
    this.hidePicker();
  };

  handleDone = () => {
    this.hidePicker();
  };

  render() {
    return (
      <div>
      <Picker show={this.state.show} handleClose={this.hidePicker} handleCancel={this.handleCancel} handleDone={this.handleDone}/>
      <div className="formWrapper">
        <div className="form" style={ formStyle }>
          <div className="hit" onClick={this.showPicker}></div>
        </div>
      </div>
      </div>
    );
  }
}

export default Form;
