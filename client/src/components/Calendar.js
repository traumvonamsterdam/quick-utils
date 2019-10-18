import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import port_config from "../port-config";
import axios from "axios";
import "./Calendar.css";
import "./CalendarComponent.css";
import DateAndEvents from "./DateAndEvents";

const MyApp = () => {
  const name = "John";
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState([]);
  const [eventsToday, setEventsToday] = useState([]);

  useEffect(() => {
    if (name && month) {
      const PORT = port_config.PORT;
      axios.get(`http://${PORT}/users/${name}`).then(res => {
        setEvents(res.data.events);
      });
    }
  }, []);

  const onChange = date => {
    setDate(date);
    setMonth(date.getMonth());

    setEventsToday(
      events.filter(({ day, month }) => {
        return day === date.getDate() && month === date.getMonth();
      })
    );
  };

  return (
    <div className="Calendar">
      <Calendar
        onChange={onChange}
        value={date}
        className={["Calendar-component"]}
      />
      <DateAndEvents date={date} events={eventsToday} />
    </div>
  );
};

export default MyApp;
