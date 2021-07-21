import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  return (
    <>
      <Link className="Item" to={"/inventory/${props._id}"}>
        <img src={props.imgURL} alt={props.name} className="item-image" />
        <div className="item-name">{props.name}</div>
        <div className="item-catagory">{props.catagory}</div>
        <div className="item-benefits">{props.benefits}</div>
      </Link>
    </>
  );
};

export default Item;
