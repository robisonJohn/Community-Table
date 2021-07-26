import './Sort.css';
import { Form } from 'react-bootstrap';

function Sort(props) {

    const handleSort = (event) => {
        props.handleSort(event.target.value)
    }

    return (
        <form className="sort-container" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select className="sort" onChange={handleSort}>
                <option className="option" value="lowest-quantity">&nbsp; Lowest Quantity to Highest Quantity &nbsp;</option>
                <option className="option" value="highest-quantity">&nbsp; Highest Quantity to Lowest Quantity &nbsp;</option>
                <option className="option" value="lowest-price">&nbsp; Lowest Price to Highest Price &nbsp;</option>
                <option className="option" value="highest-price">&nbsp; Highest Price to Lowest Price &nbsp;</option>
                <option className="option" value="lowest-shelf-life">&nbsp; Lowest Shelf Life to Highest Shelf Life &nbsp;</option>
                <option className="option" value="highest-shelf-life">&nbsp; Highest Shelf Life to Lowest Shelf Life &nbsp;</option>
            </select>
        </form>
    )
}

export default Sort;