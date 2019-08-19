import React, { Component } from 'react';

import './PickerFooter.scss';

class PickerFooter extends Component {
  render() {
    return (
      <div className="pickerFooter">
        <div><button id="cancelBtn" className="cancelBtn" onClick={this.props.handleCancel}>Cancel</button></div>
        <div><button id="doneBtn" className="doneBtn" onClick={this.props.handleDone}>Done</button></div>
      </div>
    );
  }
};

export default PickerFooter;
