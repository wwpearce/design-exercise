import React, { Component } from 'react';

import './PickerHeader.scss';

class PickerHeader extends Component {
  render() {
    return (
      <div className="pickerHeader">
        <p>Select date</p>
        <div className="dateInputWrapper">
          <input type="input" />
        </div>
      </div>
    );
  }
};

export default PickerHeader;
