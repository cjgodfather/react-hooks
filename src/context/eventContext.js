import React, { createContext, useState, useEffect } from "react";
import { eventData } from "../data";

export const EventContext = createContext();

const EventContextProvider = props => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(() => eventData);
  }, []);

  if (data) {
    return (
      <EventContext.Provider value={data}>
        {props.children}
      </EventContext.Provider>
    );
  } else {
    return <p>loading data</p>;
  }
};

export default EventContextProvider;
