import { useState, useEffect, createContext, useCallback } from "react";
import { URL_EVENTS, API_KEY } from "../API_KEY";

export const EventContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  getAllEvents: () => {},
  getUserData: () => {},
  changePassword: () => {},
  allEvents: [],
  isLoading: true,
  error: false,
  username: null,
  profileImage: null,

  getEvent: () => {},
  addToEventsData: () => {},
  // getEvents: () => {},
  // editEvent: () => {},
  // deleteEvent: () => {},
});

export default function EventsContextProvider(props) {
  //-----------NEW IMPORTANT-------------------------
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const [username, setUsername] = useState();
  const [profileImage, setProfileImage] = useState();

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [allEvents, setAllEvents] = useState([]);

  // Get All Events
  const getAllEvents = () => {
    setIsLoading(true);
    fetch(URL_EVENTS)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const events = [];

        for (const key in data) {
          const event = {
            id: key,
            ...data[key],
          };

          events.push(event);
        }

        setAllEvents(events);
      })
      .catch((err) => {
        setError(err.message);
      });
    setIsLoading(false);
  };

  async function getEvent(id) {
    const response = await fetch(URL_EVENTS + id);
    if (!response.ok) {
      throw { message: "Failed to fetch post.", status: 500 };
    }
    return response.json();
  }

  //------------------------ Get User Data ------------------------
  const getUserData = () => {
    fetch(
      `
      https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        // console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            const errorMessage =
              data?.error?.message || "Something went wrong!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // console.log(data.users[0]);
        let user = data.users[0];
        setUsername(user.displayName);
        setProfileImage(user.photoUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //------------------------ Change password ------------------------
  function changePassword(eventToken, newPassword) {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: eventToken,
          password: newPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        //   // navigate("/");
      })
      .catch((err) => {
        switch (err.message) {
          case "INVALID_ID_TOKEN":
            alert("User's credentials are no longer valid! 💥");
            break;
          case "WEAK_PASSWORD":
            alert("Password must be 6 characters long or more! 💥");
            break;
          default:
            alert("Something went wrong! 💣");
        }
        return;
      });
  }

  //------------------------ Declare the state ------------------------
  // const [allEvents, setAllEvents] = useState([]);

  /* Explanation
        Gets the current eventsData from the local browser storage
        Sets the state (parses the data from a string to obj, or display an empty array if there is no data)

        Note: This is a useEffect hook that means this is a side effect to the main functionality of the component.
        You can set this hook to be initialized only once by setting the second parameter to [].
    */
  // useEffect(() => {
  //   const eventsDataJson = localStorage.getItem("eventsData");
  //   setAllEvents(JSON.parse(eventsDataJson) || []);
  // }, []);

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

  //-----------NEW IMPORTANT-------------------------
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    getEvent: getEvent,
    getAllEvents: getAllEvents,
    allEvents: allEvents,
    isLoading: isLoading,
    error: error,
    changePassword: changePassword,
    username: username,
    profileImage: profileImage,
    getUserData: getUserData,

    addToEventsData: addToEventsData,
    // editEvent: editEvent,
    // deleteEvent: deleteEvent,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {props.children}
    </EventContext.Provider>
  );
}
