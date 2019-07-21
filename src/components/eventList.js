import React, { useContext } from "react";
import { EventContext } from "../context/eventContext";
import EventCard from "./eventCard";

const EventList = () => {
  const events = useContext(EventContext);

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <div className="list-group">
          {events.length !== 0 ? (
            events.map(event => <EventCard key={event.name} event={event} />)
          ) : (
            <p>No events yet</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default EventList;
