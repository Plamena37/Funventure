import "./Profile.css";
import ProfileLayout from "./ProfileLayout";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { API_KEY } from "../../API_KEY";

export default function Profile() {
  const [username, setUsername] = useState();
  const [image, setImage] = useState();
  const usernameRef = useRef();
  const imageRef = useRef();

  // BUG
  // CHANGE PROFILE IMAGE FORM WITH USERNAME
  // MOVE CHANGE USERNAME TO CONTEXT

  const changeUsernameInfo = (event) => {
    event.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredImage = imageRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken:
            "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFmZjFlNDJlNDE0M2I4MTQxM2VjMTI1MzQwOTcwODUxZThiNDdiM2YiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZnVudmVudHVyZS0zZDUwYyIsImF1ZCI6ImZ1bnZlbnR1cmUtM2Q1MGMiLCJhdXRoX3RpbWUiOjE2NzE4MTM0MjUsInVzZXJfaWQiOiIwNmJFSmpPQm9nZDEyUE9lZlg4aTNXYnlScXMxIiwic3ViIjoiMDZiRUpqT0JvZ2QxMlBPZWZYOGkzV2J5UnFzMSIsImlhdCI6MTY3MTgxMzQyNSwiZXhwIjoxNjcxODE3MDI1LCJlbWFpbCI6InlvbWVuYTM3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ5b21lbmEzN0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Simxmztvnxu9NMP8JVU93vNQu3GwStNkbZYLPBR6cJjE_BxoEz9PgY7HG7TulG4LVOXsmvGWKayBUskbM2-mtFh4yHJPXjsSxm7epIoOntknmJJQpO__D0L0PWbVbab7529mDO5gnqsJe-Sr3E0lDaowSUYn63GjotUTZDEEYzEElKTlkcbHujzh8vJ4JDeeKEaxBstmuBV0Aw9IaUmyFlLoCkEw6o-E3opTyE9bwrO4rNpvldvErSZCHNIh-O-cOYu8mpDD-bTssNg98fjQtSJRt_Jl1v_nae6ZAhf7CElBhzr6b56JbBdM4BAXMNCWKi3T3InEfdQIUz3vNu5qPQ",
          displayName: enteredUsername,
          photoUrl: enteredImage,
          deleteAttribute: [],
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            const errorMessage =
              data?.error?.message || "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        setUsername(data.displayName);
        setImage(data.photoUrl);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ProfileLayout>
      <section className="profile__header__container">
        <ul className="profile__list">
          <li className="profile__list__container">
            <img src={image} className="profile__list__img" alt="User image" />
          </li>
          <li>
            <h2 className="profile__list__heading">
              {/* {localStorage.getItem("username").replace(/"/g, "")} */}
              {username}
            </h2>
            <p className="profile__list__info">
              <span>Events: 0</span>
              <span>Likes: 0</span>
            </p>
          </li>
          {/* TEST */}
          <form onSubmit={changeUsernameInfo}>
            <input
              type="text"
              name="username"
              placeholder="username"
              ref={usernameRef}
            />
            <input type="url" name="image" placeholder="image" ref={imageRef} />
            <button>da</button>
          </form>
          {/* TEST */}
          <li>
            <Link to="/change-password">
              <button className="profile__list__btn">Change password</button>
            </Link>
            <Link to="/add-event">
              <button className="profile__list__btn">Add Event</button>
            </Link>
          </li>
        </ul>
      </section>
      <section className="profile__desc__container">
        <div className="profile__desc">
          <h4 className="profile__desc__heading">Your Events</h4>
          <p className="profile__desc__text">
            You haven't added any events yet.
          </p>
        </div>
        <div className="profile__desc">
          <h4 className="profile__desc__heading">Saved Events</h4>
          <p className="profile__desc__text">
            You haven't added any events yet.
          </p>
        </div>
      </section>
    </ProfileLayout>
  );
}
