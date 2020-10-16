import React from "react";
import ReactDOM from "react-dom";
import EventList from "../components/Eventlite/EventList";
import EventForm from "../components/Eventlite/EventForm";

class Eventlite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
    };
  }

  addNewEvent = (event) => {
    const events = [event, ...this.state.events].sort(function (a, b) {
      return new Date(a.start_datetime) - new Date(b.start_datetime);
    });
    this.setState({ events: events });
  };

  render() {
    return (
      <>
        <EventList events={this.state.events} />;
        <EventForm handleNewEvent={this.addNewEvent} />
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("events_data");
  const data = JSON.parse(node.getAttribute("data"));

  ReactDOM.render(
    <Eventlite events={data} />,
    document.body.appendChild(document.createElement("div"))
  );
});
