import React, { Component } from 'react';

import './PickerHeader.scss';

class PickerHeader extends Component {
  constructor(props) {
    super(props);
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="pickerHeader">
        <p>Select date</p>
        <div className="dateInputWrapper">
          <input type="input" id="inputText" onChange={this.handleInputChange} placeholder={this.props.month + '/' + this.props.date + '/' + this.props.year}/>
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
