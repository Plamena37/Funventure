import "./ProfileHeader.css";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";

export default function ProfileHeader() {
  return (
    <section className="profile__header__container">
      <ul className="profile__list">
        <li>
          <img
            src={localStorage.getItem("profilePic")}
            className="profile__list__img"
            alt="User image"
          />
        </li>
        <li>
          <h2 className="profile__list__heading">
            {localStorage.getItem("name")}
          </h2>
          <p className="profile__list__info">
            <span>Events: 0</span>
            <span>Likes: 0</span>
          </p>
        </li>
        <li>
          <Link to="/add-event">
            <button className="profile__list__btn">Add Event</button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
