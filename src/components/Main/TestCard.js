import "./TestCard.css";
import "../../Colors.css";

export default function TestCard(props) {
  return (
    <div className="test__test">
      <div className="test__img">
        <img
          src={require(`../../images/hero/${props.item.img}`)}
          alt="Customer"
        />
      </div>
      <div className="test__wrapper">
        <blockquote className="test__desc">{props.item.description}</blockquote>
        <p className="test__author">{props.item.author}</p>
        <p className="test__job">{props.item.job}</p>
      </div>
    </div>
  );
}
