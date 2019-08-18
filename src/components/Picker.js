import React, { Component } from "react";
import PickerHeader from './PickerHeader';
import PickerCalendar from './PickerCalendar';
import PickerFooter from './PickerFooter';

import './Picker.scss';

class Picker extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  };

  clearInputText = () => {
    document.getElementById('inputText').value = ''
  };

  render() {
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
            clearInputText={this.clearInputText}
          />
          <PickerFooter
            handleCancel={this.props.handleCancel}
            handleDone={this.props.handleDone}
          />
        </section>
      </div>
  )};
};

export default Picker;
