import React, { Component } from "react";

import "./PickerCalendar.scss";

class PickerCalendar extends Component {
  constructor(props) {
    super(props);
    this.dayNames = ["s", "m", "t", "w", "t", "f", "s"];
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.monthLength = 31;
    this.dayStart = 5;
    this.sunday = 6 - this.dayStart;

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick = (e) => {
    this.props.setDate(e.currentTarget.dataset.index);
    this.props.clearInputText();
  };

  render() {
    return (
      <div className="pickerCalendar">
        <div className="monthWrapper">
          <div className="chevronWrapper inactive">
            <div className="chevron left"></div>
          </div>
          <h1>{this.months[this.props.state.month] + ' ' + this.props.state.year}</h1>
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
            let classes;
            let style;
            let onClick = this.handleClick.bind(this);
            if((index + 1) === parseInt(this.props.date, 10)) {
              classes="active";
            };
            if(index === 0) {
              classes=" first";
              style = {
                gridColumnStart: this.dayStart
              };
            };
            if((index + 1) === parseInt(this.props.date, 10) && (index === 0)) {
              classes="first active"
            };
            if((index + 1) === 3 || (index + 1) === 4 || (index + 1) === 10 || (index + 1) === 11 || (index + 1) === 17 || (index + 1) === 18 || (index + 1) === 24 || (index + 1) === 25 || (index + 1) === 31) {
              classes="inactive"
              onClick="";
            };
            if((index + 1) === parseInt(this.props.date, 10) && (index + 1) === 3 || (index + 1) === 4 || (index + 1) === 10 || (index + 1) === 11 || (index + 1) === 17 || (index + 1) === 18 || (index + 1) === 24 || (index + 1) === 25 || (index + 1) === 31) {
              classes="inactive"
              onClick="";
            };
            return <div  style={style} key={index + 1} id={index + 1} data-index={index + 1} className={classes} onClick={onClick}>{index + 1}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default PickerCalendar;
