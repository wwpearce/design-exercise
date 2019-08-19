import React, { Component } from "react";
import PickerHeader from './PickerHeader';
import PickerCalendar from './PickerCalendar';
import PickerFooter from './PickerFooter';

import './Picker.scss';

class Picker extends Component {
  // Handle keydown events
  handleKeyDown = (event) => {
    // 27 = Escape
    // 13 = Enter
    switch( event.keyCode ) {
        case 27:
            this.props.handleCancel();
            break;
        case 13:
            this.props.handleDone();
            break;
        default:
            break;
    };
  };

  clearInputText = () => {
    document.getElementById('inputText').value = ''
  };

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  };


  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  };

  render() {
    // Probably passing more data to components than are needed
    // I would remove most of this when moving to a higher fidelity prototype
    // but priotizing speed for now
    return (
      <div className={this.props.show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          <PickerHeader
            state={this.props.state}
            date={this.props.date}
            month={this.props.month}
            year={this.props.year}
          />
          <PickerCalendar
            state={this.props.state}
            date={this.props.date}
            setDate={this.props.setDate}
            setMonth={this.props.setMonth}
            clearInputText={this.clearInputText}
            today={this.props.today}
          />
          <PickerFooter
            handleCancel={this.props.handleCancel}
            handleDone={this.props.handleDone}
          />
        </section>
        <div onClick={this.props.handleCancel} className="modal-back"></div>
      </div>
  )};
};

export default Picker;
