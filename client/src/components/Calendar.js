import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import port_config from "../port-config";
import axios from "axios";
import "./Calendar.css";
import "./CalendarComponent.css";
import DateAndEvents from "./DateAndEvents";
import { useStateValue } from "../GlobalState";
import { fetchEvents } from "../fetchData";

const CalendarApp = () => {
  const name = "John";
  const [eventsToday, setEventsToday] = useState();
  const [{ datePicked, events }, dispatch] = useStateValue();

  useEffect(() => {
    if (!datePicked) {
      dispatch({ type: "changeDate", newDate: new Date() });
    }
    if (!events || events.length === 0) {
      fetchEvents(dispatch);
    }
  }, []);

  useEffect(() => {
    if (events) {
      setEventsToday(
        events.filter(({ day, month }) => {
          return (
            day === datePicked.getDate() && month === datePicked.getMonth()
          );
        })
      );
    }
  }, [events]);

  const onChange = date => {
    // Update date
    dispatch({ type: "changeDate", newDate: date });
    if (events) {
      setEventsToday(
        events.filter(({ day, month }) => {
          return day === date.getDate() && month === date.getMonth();
        })
      );
    }
  };

  return (
    <div className="Calendar">
      <Calendar
        value={datePicked}
        onChange={onChange}
        minDate={new Date(2001, 0, 1)}
        maxDate={new Date(2050, 11, 31)}
        className={["Calendar-component"]}
      />
      <DateAndEvents
        date={datePicked}
        events={eventsToday}
        handleClick={fetchEvents.bind(null, dispatch)}
      />
    </div>
  );
};

export default CalendarApp;
