import React, { Component } from 'react';

import './PickerHeader.scss';

class PickerHeader extends Component {
  handleInputChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    // Hard-coding the value of the input text box, didn't have time to fully
    // flesh that component out :\
    return (
      <div className="pickerHeader">
        <p>Select date</p>
        <div className="dateInputWrapper">
          <input type="input" id="inputText" onChange={this.handleInputChange} value={(this.props.month + 1) + '/' + this.props.date + '/' + this.props.year}/>
          <div className="chevronsWrapper">
            <div className="chevron left"></div>
            <div className="chevron right"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default PickerHeader;
