import React, { useState } from "react";
import EventList from "./components/eventList";
import EventContextProvider from "./context/eventContext";
import EventCarousel from "./components/eventCarousel";
import Jumbotron from "./components/jumbotron";

import "./App.css";

function App() {
  const [display, setDisplay] = useState("list");

  const listDisplay = () => {
    setDisplay(() => "list");
  };

  const carouselDisplay = () => {
    setDisplay(() => "");
  };

  return (
    <React.Fragment>
      <Jumbotron listClicked={listDisplay} carouselClicked={carouselDisplay} />
      <EventContextProvider>
        {display ? <EventList /> : <EventCarousel />}
      </EventContextProvider>
    </React.Fragment>
  );
}

export default App;
