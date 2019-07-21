import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="card text-center mb-5">
      <img src={event.eventImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">{event.description}</p>
      </div>
      <div className="card-footer text-muted">{event.date}</div>
      <div className="card-footer text-muted">{event.location}</div>
    </div>
  );
};

export default EventCard;
