import React from "react";

const formatDate = (datetime) => new Date(datetime).toDateString();

const Event = (props) => (
  <li>
    <b>{props.event.title}</b>
    <span>{formatDate(props.event.start_datetime)}</span>
    <span>{props.event.location}</span>
  </li>
);

export default Event;
