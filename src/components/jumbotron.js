import React from "react";

const Jumbotron = props => {
  return (
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Event example</h1>
        <p class="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <p>
          <button onClick={props.listClicked} class="btn btn-secondary my-2">
            View List
          </button>
          <button
            onClick={props.carouselClicked}
            class="btn btn-secondary my-2"
          >
            View Carousel
          </button>
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
