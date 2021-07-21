import { useState, useEffect } from "react";
import "./ItemCards.css";
import ItemCard from "../ItemCard/ItemCard";
import { getItems } from "../../services/items";

const ItemCards = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const allInventory = await getInventory();
      setInventory(allInventory);
    };
    fetchInventory();
  }, []);

  const CARDS = inventory
    .reverse()
    .map((item, index) =>
      index < 8 ? (
        <ItemCard
          _id={item._id}
          name={item.name}
          imgURL={item.imgURL}
          key={item._id}
        />
      ) : null
    );

  return (
    <div className="item-cards">
      <div className="place-holder">PLACEHOLDER</div>
      <div className="cards">{CARDS}</div>
    </div>
  );
};

export default ItemCards;
