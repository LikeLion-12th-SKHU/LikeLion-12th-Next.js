import EventList from "../../compoenents/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../compoenents/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
