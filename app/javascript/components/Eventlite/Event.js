import React from "react";

const Event = (props) => (
  <li>
    <b>{props.event.title}</b>
    <span>{props.event.datetime}</span>
    <span>{props.event.location}</span>
  </li>
);

export default Event;
