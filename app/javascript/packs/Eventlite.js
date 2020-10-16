import React from "react";
import ReactDOM from "react-dom";
import EventList from "../components/Eventlite/EventList";

const Eventlite = (props) => <EventList events={props.events} />;

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("events_data");
  const data = JSON.parse(node.getAttribute("data"));

  ReactDOM.render(
    <Eventlite events={data} />,
    document.body.appendChild(document.createElement("div"))
  );
});
