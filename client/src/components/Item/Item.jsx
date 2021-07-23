import { Link } from "react-router-dom";

import "./Item.css";

const Item = (props) => {
  return (
    <>
      <Link className="Item" to={`/items/${props._id}`}>
        <div className="item-image-container">
          <img src={props.imgURL} alt={props.name} className="item-image" />
        </div>
        <div className="item-details">
          <div className="item-name">{props.name}</div>
          <div className="item-category">{props.category}</div>
        </div>
      </Link>
    </>
  );
};

export default Item;
