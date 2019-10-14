import React from "react";
import "./Calendar.css";
import "./CalendarComponent.css";

const EventDescription = ({ date, events }) => {
  const eventList = events ? events : [];
  const eventColors = {
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
      <div className="Calendar-details">Your events</div>
      {eventList.map(event => {
        const eventColor = eventColors[event.eventType.toLowerCase()];
        return (
          <div
            className="Calendar-details"
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
