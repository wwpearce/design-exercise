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

  setDateObject = () => {
    this.setState({
      unformattedDate: new Date(2019, 7, 25)
    })
    console.log(this.state);
  };

  setDate = (date) => {
    this.setState({ date: date});
    // this.unformattedDate.setDate({date});
    // let oldDate = new Date(this.state.unformattedDate);
    // let newDate = oldDate.setDate(parseInt(date, 10));
    // this.setState({
    //   unformattedDate: newDate
    // });
    // console.log(this.state);
  };

  showPicker = () => {
    let date = this.state.date;
    this.setState({
      show: true,
      oldDate: date
     });
  };

  hidePicker = () => {
    this.setState({ show: false });
  };

  handleCancel = () => {
    let oldDate = this.state.oldDate
    this.setState({ date: oldDate })
    this.hidePicker();
  };

  handleDone = () => {
    this.setDateObject();
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
