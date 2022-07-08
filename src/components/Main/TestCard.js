import "./TestCard.css";
import "../../Variables.css";

export default function TestCard({ item }) {
  return (
    <div className="test__test">
      <div className="test__img">
        <img src={require(`../../images/hero/${item.img}`)} alt="Customer" />
      </div>
      <div className="test__wrapper">
        <blockquote className="test__desc">{item.description}</blockquote>
        <p className="test__author">{item.author}</p>
        <p className="test__job">{item.job}</p>
      </div>
    </div>
  );
}
