import React from "react";
import "./Calendar.css";

const Calendar = props => {
  return (
    <div className="Calendar">
      This is the calendar. It says {props.greeting}
    </div>
  );
};

export default Calendar;
