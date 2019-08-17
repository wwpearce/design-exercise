import React, { Component } from 'react';

import './PickerHeader.scss';

class PickerHeader extends Component {
  render() {
    return (
      <div className="pickerHeader">
        <p>Select date</p>
        <div className="dateInputWrapper">
          <input type="input" value={this.props.today}/>
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
