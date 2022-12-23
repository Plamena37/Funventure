import "./Profile.css";
import ProfileLayout from "./ProfileLayout";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <ProfileLayout>
      <section className="profile__header__container">
        <ul className="profile__list">
          <li>
            {/* <img
              src={localStorage.getItem("profilePic")}
              className="profile__list__img"
              alt="User image"
            /> */}
          </li>
          <li>
            <h2 className="profile__list__heading">
              {/* {localStorage.getItem("username").replace(/"/g, "")} */}
              {localStorage.getItem("username")}
            </h2>
            <p className="profile__list__info">
              <span>Events: 0</span>
              <span>Likes: 0</span>
            </p>
          </li>
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
