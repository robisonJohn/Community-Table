import { useState } from "react";
import { Layout } from "../../components"
import { Redirect } from "react-router-dom"
import { addItem, createItem  } from "../../services/items"
import "./AddItem.css"

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
    return <Redirect to={'/items'} />
  }
  return(
    <Layout >
      <from className='create-form' onSubmit={handleSubmit}>
      <input
          className='input-name'
          placeholder='Name'
          value={item.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-category'
          placeholder='Category'
          value={item.category}
          name='category'
          required
          onChange={handleChange}
        />
        <textarea
          className='textarea-benefits'
          placeholder='Benefits'
          value={item.benefits}
          name='benefits'
          required
          onChange={handleChange}
        />
        <input
          className='input-image-link'
          placeholder='Image Link'
          value={item.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
         <input
          className='input-quantity'
          placeholder='Quantity'
          value={item.quantity}
          name='quantity'
          required
          onChange={handleChange}
        />
        <button type='submit' className='submit-button'>
          Add Item
        </button>
      </from>
    </Layout>
  )
}

export default AddItem