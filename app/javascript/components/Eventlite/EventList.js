import React from "react";
import Event from "./Event";
const EventList = (props) => (
  <ul>
    {props.events.map(function (event) {
      return <Event key={event.id} event={event} />;
    })}
  </ul>
);

export default EventList;
