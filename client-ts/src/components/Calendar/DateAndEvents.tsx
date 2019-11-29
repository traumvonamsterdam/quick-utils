import React from "react";
import "./Calendar.css";
import "./CalendarComponent.css";

import { Button } from "reactstrap";
import { EventEl } from "../../interfaces";

const EventDescription = (input: {
  date: Date;
  events: EventEl[];
  handleClick: any;
}) => {
  const { date, events, handleClick } = input;
  const eventList = events ? events : [];

  interface EventColors {
    [key: string]: string;
  }

  const eventColors: EventColors = {
    sport: "blue",
    social: "pink",
    outdoors: "green"
  };

  return (
    <div className="Calendar-date-column">
      <div className="Calendar-details">The date and time is: </div>
      <div className="Calendar-details">
        <h3>{date.toDateString()}</h3>
      </div>
      <div className="Calendar-details">
        Your events
        <Button onClick={handleClick} className="refresh-button">
          Refresh
        </Button>
      </div>

      {eventList.map((event: EventEl) => {
        const eventColor = eventColors[event.eventType.toLowerCase()];
        return (
          <div
            className="Calendar-events"
            key={event.id}
            style={{ backgroundColor: eventColor }}
          >
            {event.eventName}
          </div>
        );
      })}
    </div>
  );
};

export default EventDescription;
