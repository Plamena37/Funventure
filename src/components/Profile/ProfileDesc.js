import "./ProfileDesc.css";

export default function ProfileDesc() {
  return (
    <section className="profile__desc__container">
      <div className="profile__desc">
        <h4 className="profile__desc__heading">Your Events</h4>
        <p className="profile__desc__text">You haven't added any events yet.</p>
      </div>
      <div className="profile__desc">
        <h4 className="profile__desc__heading">Saved Events</h4>
        <p className="profile__desc__text">You haven't added any events yet.</p>
      </div>
    </section>
  );
}
