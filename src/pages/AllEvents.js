import { useEffect, useContext } from "react";
import EventList from "../components/Events/EventList";
import { EventContext } from "../context/EventsContextProvider";
import NavigationLayout from "../components/Layout/NavigationLayout";

export default function AllEvents() {
  const eventCtx = useContext(EventContext);
  const isLoading = eventCtx.isLoading;

  useEffect(() => {
    eventCtx.getAllEvents();
  }, []);

  const allEvents = eventCtx.allEvents;

  return (
    <NavigationLayout>
      <section className="all__events">
        <h1 className="section__primary__heading center m-b--small event__list__heading">
          All Events 🎉
        </h1>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <EventList events={allEvents} />}
      </section>
    </NavigationLayout>
  );
}
