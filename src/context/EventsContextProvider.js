import { useState, useEffect, createContext } from "react";

export const EventContext = createContext({
  allEvents: [],
  addToEventsData: () => {},
  editEvent: () => {},
  deleteEvent: () => {},
});

export default function EventsContextProvider(props) {
  //------------------------ Declare the state ------------------------
  const [allEvents, setAllEvents] = useState([]);

  /* Explanation
        Gets the current eventsData from the local browser storage
        Sets the state (parses the data from a string to obj, or display an empty array if there is no data)

        Note: This is a useEffect hook that means this is a side effect to the main functionality of the component.
        You can set this hook to be initialized only once by setting the second parameter to [].
    */
  useEffect(() => {
    const eventsDataJson = localStorage.getItem("eventsData");
    setAllEvents(JSON.parse(eventsDataJson) || []);
  }, []);

  //------------------------ Create Event ------------------------
  /*Explanation
        Set the new state (spread the array qallEvents and add the new event to it)
        Parse the array to string format
        Update the local storage
    */
  const addToEventsData = (newEvent) => {
    const newEvents = [newEvent, ...allEvents];
    setAllEvents(newEvents);

    const eventsDataJson = JSON.stringify(newEvents);
    // const eventsDataJson = JSON.parse(JSON.stringify(newEvents));
    localStorage.setItem("eventsData", eventsDataJson);
  };

  //------------------------ Edit Event ------------------------
  function editEvent(event) {
    const filteredArray = allEvents.filter((item) => item.id !== event.id);
    const newEvents = [event, ...filteredArray];
    setAllEvents(newEvents);
    const eventsDataJson = JSON.stringify(newEvents);
    localStorage.setItem("eventsData", eventsDataJson);
  }

  //------------------------ Delete Event ------------------------
  /* Explanation
        Set the new state (removes the item from the state)
        Parse the array from obj to string
        Update the local storage
    */
  function deleteEvent(eventItem) {
    setAllEvents(allEvents.filter((item) => item !== eventItem));
    let eventsDataJson = JSON.stringify(allEvents);
    localStorage.setItem("eventsData", eventsDataJson);
  }

  return (
    <EventContext.Provider
      value={{
        allEvents: allEvents,
        addToEventsData: addToEventsData,
        editEvent: editEvent,
        deleteEvent: deleteEvent,
      }}
    >
      {/*Passes down all of the functions*/}
      {props.children}
    </EventContext.Provider>
  );
}
