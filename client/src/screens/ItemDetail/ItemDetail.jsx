import { useState, useEffect } from "react";
import { Layout } from '../../components'
import { getItem, deleteItem } from "../../services/items"
import { useParams, Link } from "react-router-dom";

const ItemDetail = (props) => {
const [item, setItem] = useState(null)
const [isLoaded, setLoaded] = useState(false)
const { id } = useParams()

useEffect(() =>{
  const fetchItem = async () => {
    const item = await getitem(id)
      setitem(item)
      setLoaded(true)
  }
  fetchItem()
}, [id])

if (!isLoaded) {
  return <h1>Loading...</h1>
}

return(
<Layout>
  <div className="item-detail">
    <img
    className="item-image"
    src={item.imgURL}
    alt={item.name} />

    <div className="detail">
      <div className="name">{item.name}</div>
      <div className="category">{item.category}</div>
      <div className="benefits">{item.benefits}</div>
      <div className="quantity">{item.quantity}</div>
      <div className='button-container'>
            <Link className='edit-button' to={`/items/${item._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={() => deleteProduct(item._id)}
            >
              Delete
            </button>
          </div>
    </div>
  </div>
</Layout>

)






}