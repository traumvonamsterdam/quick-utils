import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "./Calendar.css";
import "./CalendarComponent.css";
import EventDescription from "./EventDescription";

const MyApp = () => {
  const name = "John";
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Do something when date changed
  }, [date]);

  useEffect(() => {
    if (name && month) {
      axios.get(`http://localhost:4000/users/${name}/${month}`).then(res => {
        setEvents(res.data.events);
      });
    }
  }, [month]);

  const onChange = date => setDate(date);
  const onClickMonth = date => {
    setMonth(date.getMonth());
  };

  return (
    <div className="Calendar">
      <Calendar
        onChange={onChange}
        onClickMonth={onClickMonth}
        value={date}
        className={["Calendar-component"]}
      />
      <EventDescription date={date} events={events} />
    </div>
  );
};

export default MyApp;
