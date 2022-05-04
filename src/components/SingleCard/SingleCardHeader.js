import "./SingleCardHeader.css";

export default function SingleCardHeader() {
  return (
    <>
      <header className="single__card__header">
        <i class="fas fa-map-marked-alt single__card__icon"></i>
        <h2 className="single__card__heading">Powder Festival</h2>
      </header>
      <ul className="single__card__list">
        <li>
          <i class="fas fa-map-pin card__list__icon"></i>
          <p className="card__list__desc">Burgas</p>
        </li>
        <li>
          <i class="fas fa-clock card__list__icon"></i>
          <p className="card__list__desc">From 2 PM to 4 PM</p>
        </li>
        <li>
          <i class="fas fa-calendar-day card__list__icon"></i>
          <p className="card__list__desc">03 Oct 2022</p>
        </li>
        <li>
          <i class="fas fa-users-cog card__list__icon"></i>
          <p className="card__list__desc">Dreamers Org</p>
        </li>
      </ul>
    </>
  );
}
