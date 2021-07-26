import { useState, useEffect } from "react";
import { Layout } from "../../components";
import { getItem, updateItem } from "../../services/items";
import { useParams, Redirect } from "react-router-dom";
import "./ItemEdit.css";
import { Form, Button, Image, Container } from 'react-bootstrap';

const ItemEdit = (props) => {
  const [item, setItem] = useState({
    name: "",
    category: "",
    imgURL: "",
    benefits: "",
    quantity: "",
    price: "",
    shelfLife: "",
    daysHeld: ""
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
    <Layout  user={props.user}>
      <Container className="item-edit">
        <Container className="image-container">
          <Image className="edit-item-image" src={item.imgURL} alt={item.name} />
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="edit-input-image"
              placeholder="Image Link"
              value={item.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </Form>
        </Container>
        <Form className="edit-form" onSubmit={handleSubmit}>
          <Form.Control
            className="category"
            placeholder="Category"
            value={item.category}
            name="category"
            required
            onChange={handleChange}
          />
          <Form.Control 
            as="textarea"
            rows={3}
            className="input-benefits"
            placeholder="Benefits"
            value={item.benefits}
            name="benefits"
            required
            onChange={handleChange}
          />
          <Form.Control
            className="quantity"
            placeholder="Quantity"
            value={item.quantity}
            name="quantity"
            required
            onChange={handleChange}
          />
          <Form.Control
            className="price"
            placeholder="Price"
            value={item.price}
            name="price"
            required
            onChange={handleChange}
          />
          <Form.Control
            className="shelfLife"
            placeholder="Shelf Life"
            value={item.shelfLife}
            name="shelfLife"
            required
            onChange={handleChange}
          />
          <Form.Control
            className="daysHeld"
            placeholder="Days Held"
            value={item.daysHeld}
            name="daysHeld"
            required
            onChange={handleChange}
          />
          <Button type="submit" className="save-button">
            Change
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default ItemEdit;
