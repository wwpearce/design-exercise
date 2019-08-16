import React, { Component } from "react";

import "./PickerCalendar.scss";

class PickerCalendar extends Component {
  constructor(props) {
    super(props);
    this.dayNames = ["s", "m", "t", "w", "t", "f", "s"];
    this.monthLength = 31;
  }
  render() {
    return (
      <div className="pickerCalendar">
        <div className="monthWrapper">
          <h1>&#8249;</h1>
          <h1>August 2019</h1>
          <h1>&#8250;</h1>
        </div>
        <div className="dayNames">
          {this.dayNames.map((name, index) => {
            return <div key={index} >{name}</div>;
          })}
        </div>
        <div className="datesWrapper">
          {[...Array(this.monthLength)].map((name, index) => {
            if(index === 0) {
              let style = {
                gridColumnStart: 7
              };
              return <div  key={index + 1} id={index + 1} style={style}>{index + 1}</div>;
            }
            else {
              return <div  key={index + 1} id={index + 1}>{index + 1}</div>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default PickerCalendar;
