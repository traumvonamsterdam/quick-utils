import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

const MyApp = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Do something when date changed
  }, [date]);

  const onChange = date => setDate(date);
  return (
    <div className="Calendar">
      <div>The date and time is: {date.toDateString()}</div>
      <div>
        <Calendar
          onChange={onChange}
          value={date}
          className={["Calendar-component"]}
        />
      </div>
      <div>The end!</div>
    </div>
  );
};

// const Calendar = props => {
//   return (
//     <div className="Calendar">
//       This is the calendar. It says {props.greeting}
//     </div>
//   );
// };

export default MyApp;
