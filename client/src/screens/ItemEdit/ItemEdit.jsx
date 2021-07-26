import { useState, useEffect } from "react";
import { Layout } from "../../components";
import { getItem, updateItem } from "../../services/items";
import { useParams, Redirect } from "react-router-dom";
import "./ItemEdit.css";

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
      setItem(item);
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
    <Layout user={props.user}>
      <div className="item-edit">
        <img className="edit-item-image" src={item.imgURL} alt={item.name} />
        <div className="e-detail">
          <div className="name">{item.name}</div>
          <form
            className="form-detail"
            className="edit-form"
            onSubmit={handleSubmit}
          >
            <label className="e-label">Category</label>
            <input
              className="e-input"
              placeholder="Category"
              value={item.category}
              name="category"
              required
              onChange={handleChange}
            />
            <label className="e-label">Benefits</label>
            <textarea
              className="e-input"
              placeholder="Benefits"
              value={item.benefits}
              name="benefits"
              required
              onChange={handleChange}
            />
            <div className="small-box"></div>
            <label className="e-label">Quantity</label>
            <input
              className="e-input"
              placeholder="Quantity"
              value={item.quantity}
              name="quantity"
              required
              onChange={handleChange}
            />
            <label className="e-label">Image</label>
            <input
              className="e-input"
              placeholder="Image Link"
              value={item.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
            <div className="e-button-container">
              <button
                type="submit"
                className="e-button"
                onSubmit={handleSubmit}
              >
                CHANGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ItemEdit;
