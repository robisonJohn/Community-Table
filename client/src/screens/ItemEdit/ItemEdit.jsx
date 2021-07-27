import { useState, useEffect } from "react";
import { Layout } from "../../components";
import { getItem, updateItem } from "../../services/items";
import { useParams, Redirect, Link } from "react-router-dom";
import "./ItemEdit.css";
import { Form, Image, Button, Container } from 'react-bootstrap';

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
      <Container className="item-edit">
        <div id="image-container">
          <Image className="edit-item-image" src={item.imgURL} alt={item.name} />
        </div>
        

        
        <Container className="e-detail">
          <Container className="name">{item.name}</Container>
          <Form
            className="form-detail"
            className="edit-form"
            onSubmit={handleSubmit}
          >
            <Form.Label className="e-label">Category</Form.Label>
            <Form.Select
              className="e-input"
              placeholder="Category"
              value={item.category}
              name="category"
              required
              onChange={handleChange}
            >
              <option>Select a category</option>
              <option className="dry-goods" value="Dry goods">
                Dry goods
              </option>
              <option className="produce" value="Produce">
                Produce
              </option>
            </Form.Select>
            <Form.Label className="e-label">Benefits</Form.Label>
            <Form.Control 
              as="textarea"
              rows={3}
              className="e-input"
              placeholder="Benefits"
              value={item.benefits}
              name="benefits"
              required
              onChange={handleChange}
            />
            <Container className="small-box"></Container>
            <Form.Label className="e-label">Quantity</Form.Label>
            <Form.Control
              className="e-input"
              placeholder="Quantity"
              value={item.quantity}
              name="quantity"
              required
              onChange={handleChange}
            />
            <Form.Label className="e-label">Image</Form.Label>
            <Form.Control
              className="e-input"
              placeholder="Image Link"
              value={item.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
            <Container  className="button-box">
            <Link to={`/inventory`}>
              <Button className='e-button'> GO BACK </Button>
            </Link>
              <Button
                type="submit"
                className="e-button"
                onSubmit={handleSubmit}
              >
                CHANGE
              </Button>
              </Container>
          </Form>
        </Container>
      </Container>
    </Layout>
  );
};

export default ItemEdit;
