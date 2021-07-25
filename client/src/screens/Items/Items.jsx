import { useState, useEffect } from "react";
import { Layout, Item } from "../../components";
import { getItems } from "../../services/items";
import "./Items.css";

const Items = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
    };
    fetchItems();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="Items">
        <h2 className="header">Table Inventory</h2>

        <div className="items-container">
          {items.map((item, index) => {
            return (
              <Item
                _id={item._id}
                imgURL={item.imgURL}
                name={item.name}
                category={item.category}
                quantity={item.quantity}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Items;
