import React, { Component } from "react";

import DesktopBackground from "../images/desktop-bgr.gif";
import MobileBackground from "../images/mobile-bgr.gif";
import "./Form.scss";

import Picker from "./Picker.js";

let isMobile = false;

let background = isMobile ? MobileBackground : DesktopBackground;

let formStyle = {
  backgroundImage: `url(${background})`
};

class Form extends Component {
  constructor(props) {
    super(props);

    const unformattedDate = new Date();

    this.state = {
      show: false,
      unformattedDate: unformattedDate,
      get month() {
        return this.unformattedDate.getMonth();
      },
      get date() {
        return this.unformattedDate.getDate();
      },
      get day() {
        return this.unformattedDate.getDay();
      },
      get year() {
        return this.unformattedDate.getFullYear();
      }
    };
  };

  setDate = (date) => {
    this.setState({ date: date});
  };

  showPicker = () => {
    this.setState({ show: true });
  };

  hidePicker = () => {
    this.setState({ show: false });
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
        <Picker
          state={this.state}
          month={this.state.month}
          date={this.state.date}
          day={this.state.day}
          year={this.state.year}
          setDate={this.setDate}
          show={this.state.show}
          handleClose={this.hidePicker}
          handleCancel={this.handleCancel}
          handleDone={this.handleDone}
        />
        <div className="formWrapper">
          <div className="form" style={formStyle}>
            <div className="hit" onClick={this.showPicker}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
