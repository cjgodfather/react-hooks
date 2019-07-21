import React, { useContext } from "react";
import { EventContext } from "../context/eventContext";

const EventCarousel = () => {
  const events = useContext(EventContext);
  console.log(events);

  return (
    <div class="row justify-content-center">
      <div class="col-10">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            />
            <li data-target="#carouselExampleCaptions" data-slide-to="1" />
            <li data-target="#carouselExampleCaptions" data-slide-to="2" />
            <li data-target="#carouselExampleCaptions" data-slide-to="3" />
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={events[0].eventImage}
                class="d-block w-100"
                alt="..."
                height="400px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>{events[0].name}</h3>
                <p>{events[0].location}</p>
                <p>{events[0].date}</p>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={events[1].eventImage}
                class="d-block w-100"
                alt="..."
                height="400px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>{events[1].name}</h3>
                <p>{events[1].location}</p>
                <p>{events[1].date}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={events[2].eventImage}
                class="d-block w-100"
                alt="..."
                height="400px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>{events[2].name}</h3>
                <p>{events[2].location}</p>
                <p>{events[2].date}</p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={events[3].eventImage}
                class="d-block w-100"
                alt="..."
                height="400px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>{events[3].name}</h3>
                <p>{events[3].location}</p>
                <p>{events[3].date}</p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
