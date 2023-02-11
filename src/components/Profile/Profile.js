import "./Profile.css";
import ProfileLayout from "./ProfileLayout";
import { Link } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { API_KEY } from "../../API_KEY";
import { EventContext } from "../../context/EventsContextProvider";
import { useSnackbar } from "notistack";

export default function Profile() {
  const eventCtx = useContext(EventContext);
  const eventToken = eventCtx.token;

  const [username, setUsername] = useState(eventCtx.username);
  const [image, setImage] = useState(eventCtx.profileImage);

  const usernameRef = useRef();
  const imageRef = useRef();
  const newPasswordRef = useRef();

  const { enqueueSnackbar } = useSnackbar();

  // Change Username or Profile Image ************************************
  const changeUsernameInfo = (event) => {
    event.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredImage = imageRef.current.value;

    if (enteredUsername || enteredImage) {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: eventToken,
            displayName: enteredUsername ? enteredUsername : eventCtx.username,
            photoUrl: enteredImage ? enteredImage : eventCtx.profileImage,
            deleteAttribute: [],
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          // console.log(res);
          if (res.ok) {
            enqueueSnackbar("Success", {
              preventDuplicate: true,
              variant: "success",
            });
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
          enqueueSnackbar(err.message, {
            preventDuplicate: true,
            variant: "error",
          });
        });
    }

    usernameRef.current.value = "";
    imageRef.current.value = "";
    newPasswordRef.current.value = "";
  };

  // Change Username Password ************************************
  const changeUserPassword = (event) => {
    event.preventDefault();
    const enteredPassword = newPasswordRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: eventCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        // console.log(res);
        if (!res.ok) {
          throw new Error();
        } else {
          enqueueSnackbar("Password Changed!", {
            preventDuplicate: true,
            variant: "success",
          });
        }
        // BUG ADD NOTISTACK
        // navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("Something went wrong!", {
          preventDuplicate: true,
          variant: "error",
        });
        switch (err.message) {
          case "INVALID_ID_TOKEN":
            alert("User's credentials are no longer valid! 💥");
            break;
          case "WEAK_PASSWORD":
            alert("Password must be 6 characters long or more! 💥");
            break;
          default:
          // alert("Something went wrong! 💣");
        }
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
              {eventCtx.userName ? eventCtx.userName : "no username..."}
            </h2>
            <p className="profile__list__info">
              <span>Events: 0</span>
              <span>Likes: 0</span>
            </p>
          </li>
          <li>
            {/* <Link to="/change-password">
              <button className="profile__list__btn">Change password</button>
            </Link> */}
            <Link to="/add-event">
              <button className="profile__list__btn">Add Event</button>
            </Link>
          </li>
        </ul>
      </section>
      {/* <section className="profile__desc__container">
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
      </section> */}
      <section className="profile__desc__container">
        <div className="profile__desc">
          <h4 className="profile__desc__heading">Settings</h4>

          <form onSubmit={changeUsernameInfo} className="profile__form">
            <label className="profile__desc__text" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              name="username"
              placeholder="username"
              ref={usernameRef}
            />
            <button className="profile__form__btn">Submit</button>
          </form>

          <form onSubmit={changeUsernameInfo} className="profile__form">
            <label className="profile__desc__text" htmlFor="image">
              Profile Image:
            </label>
            <input type="url" name="image" placeholder="image" ref={imageRef} />
            <button className="profile__form__btn">Submit</button>
          </form>

          <form onSubmit={changeUserPassword} className="profile__form">
            <label className="profile__desc__text" htmlFor="new-password">
              Change Password:
            </label>
            <input
              ref={newPasswordRef}
              type="password"
              id="new-password"
              // minLength="6"
              placeholder="new password"
            />
            <button className="profile__form__btn">Submit</button>
          </form>
        </div>
      </section>
    </ProfileLayout>
  );
}
