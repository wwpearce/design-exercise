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
          <div className="chevronWrapper inactive">
            <div className="chevron left"></div>
          </div>
          <h1>August 2019</h1>
          <div className="chevronWrapper">
            <div className="chevron right"></div>
          </div>
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
            };
          })}
        </div>
      </div>
    );
  }
}

export default PickerCalendar;
