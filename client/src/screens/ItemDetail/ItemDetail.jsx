import { useState, useEffect } from "react";
import { Layout } from '../../components'
import { getItem, deleteItem } from "../../services/items"
import { useParams, Link } from "react-router-dom";
import "./ItemDetail.css"

const ItemDetail = (props) => {
const [item, setItem] = useState(null)
const [isLoaded, setLoaded] = useState(false)
const { id } = useParams()

useEffect(() =>{
  const fetchItem = async () => {
    const item = await getItem(id)
      setItem(item)
      setLoaded(true)
  }
  fetchItem()
}, [id])

if (!isLoaded) {
  return <h1>Loading...</h1>
}

return(
  <Layout  user={props.user}>
    <h2 id="Detail-header">Details</h2>
    <div className="item-detail">
      <img
      className="item-image"
      src={item.imgURL}
      alt={item.name} />

      <div className="detail">
        <div className="name">{item.name}</div>
        <div className="category">{item.category}</div>
        <div className="benefits">{item.benefits}</div>
        <div className="quantity"> <h4>Quantity: </h4> {item.quantity}</div>
        <div className="price"><h4>Price: </h4>${item.price}</div>
        <div className="shelfLife"><h4>Shelf Life: </h4>{item.shelfLife}</div>
        <div className="daysHeld"><h4>Days Held: </h4>{item.daysHeld}</div>
        <div className="box"><p>1 = 1<img src="https://cdn.iconscout.com/icon/free/png-256/box-package-parcel-logistic-delivery-unpack-open-shipping-3-20450.png" alt="box" width="20"/> </p> </div>
    </div>   
    </div>
        <div className='button-container'>
            <Link className='back-button' to={`/inventory`}>
                <button> GO BACK </button>
              </Link>
              <Link className='edit-button' to={`/items/${item._id}/edit`}>
                <button> UPDATE TABLE </button>
              </Link>
              <button
                className='delete-button'
                onClick={() => deleteItem(item._id)}
              >
                DELETE ITEM
              </button>
      </div>
  </Layout>

)
}

export default ItemDetail