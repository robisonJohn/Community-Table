import { useState, useEffect } from "react";
import { Layout } from "../../components";
import { getItem, upadateItem } from "../../services/items";
import { useParams, Redirect } from "react-router-dom";
import "ItemEdit.css";

const ItemEdit = (props) => {
  const [item, setItem] = useState({
    name: "",
    category: "",
    imgURL: "",
    benefits: "",
    quantity: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id);
      setitem(item);
    };
    fetchItem();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateItem(id, item);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/items/${id}`} />;
  }

  return (
    <Layout>
      <div className="item-edit">
        <div className="image-container">
          <img className="edit-item-image" src={item.imgURL} alt={item.name} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image"
              placeholder="Image Link"
              value={item.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="category"
            placeholder="Category"
            value={item.category}
            name="category"
            required
            onChange={handleChange}
          />
          <textarea
            className="input-benefits"
            placeholder="Benefits"
            value={item.benefits}
            name="benefits"
            required
            onChange={handleChange}
          />
          <input
            className="quantity"
            placeholder="Quantity"
            value={item.quantity}
            name="quantity"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Change
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ItemEdit;
