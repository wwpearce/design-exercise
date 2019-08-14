import React from 'react';
import PickerHeader from './PickerHeader';
import PickerCalendar from './PickerCalendar';

import './Picker.scss';

const Picker = ({ handleClose, handleCancel, handleDone, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <PickerHeader />
        <PickerCalendar />
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleDone}>Done</button>
      </section>
    </div>
  );
};

export default Picker;
