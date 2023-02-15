import { useState, useEffect, createContext, useCallback } from "react";
import { URL_EVENTS, API_KEY } from "../API_KEY";

let logoutTimer;

export const EventContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  getAllEvents: () => {},
  changePassword: () => {},
  setNewUsername: () => {},
  setNewProfileImage: () => {},
  allEvents: [],
  isLoading: true,
  error: false,
  username: null,
  profileImage: null,

  // addToEventsData: () => {},
});

//------------------------ Calculate Remaining Time ------------------------
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

//------------------------ Retrieve Stored Token ------------------------
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export default function EventsContextProvider(props) {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  // const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const [username, setUsername] = useState();
  const [profileImage, setProfileImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [allEvents, setAllEvents] = useState([]);

  const userIsLoggedIn = !!token;

  //------------------------ Log Out Handler ------------------------
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  //------------------------ Log In Handler ------------------------
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      // console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  //------------------------ Get All Events ------------------------
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

  //------------------------ Set Username ------------------------
  const setNewUsername = (newUsername) => {
    setUsername(newUsername);
  };

  //------------------------ Set Profile Image ------------------------
  const setNewProfileImage = (newProfileImage) => {
    setProfileImage(newProfileImage);
  };

  //------------------------ Get User Data ------------------------
  // const getUserData = () => {
  //   fetch(
  //     `
  //     https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         idToken: token,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       // console.log(res);
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         return res.json().then((data) => {
  //           const errorMessage =
  //             data?.error?.message || "Something went wrong!";

  //           throw new Error(errorMessage);
  //         });
  //       }
  //     })
  //     .then((data) => {
  //       // console.log(data.users[0]);
  //       let user = data.users[0];
  //       setUsername(user.displayName);
  //       setProfileImage(user.photoUrl);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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

  //-----------NEW IMPORTANT-------------------------
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    getAllEvents: getAllEvents,
    allEvents: allEvents,
    isLoading: isLoading,
    error: error,
    changePassword: changePassword,
    username: username,
    profileImage: profileImage,
    setNewUsername: setNewUsername,
    setNewProfileImage: setNewProfileImage,

    // addToEventsData: addToEventsData,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {props.children}
    </EventContext.Provider>
  );
}
