import { useState } from "react";
import { Layout } from "../../components";
import { Redirect } from "react-router-dom";
import { createItem } from "../../services/items";
import "./AddItem.css";
import { Form, Button, Container } from "react-bootstrap";

const AddItem = (props) => {
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

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createItem(item);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={"/inventory"} />;
  }
  return (
    <Layout user={props.user}>
      <div id="add-item-header">
        <h2 id="add-header">ADD TO TABLE INVENTORY</h2>
      </div>
      <Container className="form-container">
        <Form className="create-form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              className="add-input"
              placeholder="Name"
              value={item.name}
              name="name"
              required
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="add-input"
              placeholder="Category"
              value={item.category}
              name="category"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              className="add-input"
              placeholder="Benefits"
              value={item.benefits}
              name="benefits"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              className="add-input"
              placeholder="Image Link"
              value={item.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              className="add-input"
              placeholder="Quantity"
              value={item.quantity}
              name="quantity"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control 
              type="text"
              className='add-input'
              placeholder='Price'
              value={item.price}
              name='price'
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control 
              type="text"
              className='add-input'
              placeholder='Shelf Life'
              value={item.shelfLife}
              name='shelfLife'
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control 
              type="text"
              className='add-input'
              placeholder='Days Held'
              value={item.daysHeld}
              name='daysHeld'
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" id="submit-button">
            Add Item
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default AddItem;
