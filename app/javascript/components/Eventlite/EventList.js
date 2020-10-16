import React from "react";
import Event from "./Event";
const EventList = (props) => (
  <ul>
    {props.events.map(function (event, i) {
      return <Event key={i} event={event} />;
    })}
  </ul>
);

export default EventList;
