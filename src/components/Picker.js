import React, { Component } from "react";
import PickerHeader from './PickerHeader';
import PickerCalendar from './PickerCalendar';

import './Picker.scss';

class Picker extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  };
  render() {
    return (
      <div className={this.props.show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          <PickerHeader state={this.props.state} date={this.props.date}/>
          <PickerCalendar state={this.props.state} date={this.props.date} setDate={this.props.setDate}/>
          <button onClick={this.props.handleCancel}>Cancel</button>
          <button onClick={this.props.handleDone}>Done</button>
        </section>
      </div>
  )};
};

export default Picker;
