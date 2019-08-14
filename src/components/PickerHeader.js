import React from 'react';

import './PickerHeader.scss';

const PickerHeader = () => {

  return (
    <div className="pickerHeader">
      <p>Select date</p>
      <div className="dateInputWrapper">
        <input type="input" value="09/14/2019" />
      </div>
    </div>
  );
};

export default PickerHeader;
