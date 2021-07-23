import { useState } from "react";
import { Layout } from "../../components"
import { Redirect } from "react-router-dom"
import { createItem  } from "../../services/items"
import "./AddItem.css";
import { Form, Button } from 'react-bootstrap';

const AddItem = (props) => {
  const [item, setItem] = useState({
    name:'',
    category:'',
    imgURL:'',
    benefits:'',
    quantity:'',
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setItem({
      ...item,
      [name]: value,
    })
  }

  const handleSubmit = async (event) =>{
    event.preventDefault()
    const created = await createItem(item)
    setCreated({created})
  }

  if (isCreated){
    return <Redirect to={'/inventory'} />
  }
  return(
    <Layout  user={props.user}>
      <Form className='create-form' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            className='input-name'
            placeholder='Name'
            value={item.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className='input-category'
            placeholder='Category'
            value={item.category}
            name='category'
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            className='textarea-benefits'
            placeholder='Benefits'
            value={item.benefits}
            name='benefits'
            required
            onChange={handleChange}
          />        
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            className='input-image-link'
            placeholder='Image Link'
            value={item.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control 
            type="text"
            className='input-quantity'
            placeholder='Quantity'
            value={item.quantity}
            name='quantity'
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Button type='submit' className='submit-button'>
          Add Item
        </Button>
      </Form>
    </Layout>
  )
}

export default AddItem