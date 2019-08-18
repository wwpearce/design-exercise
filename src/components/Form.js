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
    const month = unformattedDate.getMonth();
    const date = unformattedDate.getDate();
    const day = unformattedDate.getDay();
    const year = unformattedDate.getFullYear();
    const formattedDate = this.formatDate(unformattedDate);

    this.state = {
      show: false,
      unformattedDate: unformattedDate,
      formattedDate: formattedDate,
      month: month,
      date: date,
      day: day,
      year: year
    };
  };

  formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    const formattedDate = mm + "/" + dd + "/" + yyyy;

    return formattedDate;
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
