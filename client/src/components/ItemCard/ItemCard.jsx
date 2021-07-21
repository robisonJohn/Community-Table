import { Link } from "react-router-dom";
import "./ItemCard.css";

const ItemCard = (props) => {
  return (
    <div className="ItemCard">
      <Link className="item-card" to={`/products/${props._id}`}>
        <img className="item-card-image" src={props.imgURL} alt={props.name} />
        <div>PLACEHOLDER</div>
      </Link>
    </div>
  );
};
