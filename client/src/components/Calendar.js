import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import "./CalendarComponent.css";
import DateAndEvents from "./DateAndEvents";
import { useStateValue } from "../GlobalState";
import { fetchEvents } from "../fetchData";

const CalendarApp = () => {
  const [eventsToday, setEventsToday] = useState();
  const [{ datePicked, events }, dispatch] = useStateValue();

  // Filter events for a specific date
  const filterEvents = (events, date) => {
    if (events) {
      setEventsToday(
        events.filter(({ day, month }) => {
          return day === date.getDate() && month === date.getMonth();
        })
      );
    }
  };

  useEffect(() => {
    // Fetch today's events
    fetchEvents(dispatch);
  }, []);

  useEffect(() => {
    // Re-filter events when events are updated (e.g. after refresh)
    filterEvents(events, datePicked);
  }, [events]);

  const onChange = date => {
    // Update date and find events for that date
    dispatch({ type: "changeDate", newDate: date });
    filterEvents(events, date);
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
