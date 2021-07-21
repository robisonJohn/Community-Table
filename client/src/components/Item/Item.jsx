import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  return (
    <>
      <Link className="Item" to={`/inventory/${props._id}`}>
        <img src={props.imgURL} alt={props.name} className="item-image" />
        <div className="item-name">{props.name}</div>
        <div className="item-category">{props.category}</div>
      </Link>
    </>
  );
};

export default Item;
