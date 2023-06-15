import React, { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = () => {
  const events = getAllEvents();
  function findEventsHandler(month, year){

  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
