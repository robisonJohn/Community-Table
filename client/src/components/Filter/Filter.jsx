import './Filter.css';
import { Form } from 'react-bootstrap';

function Filter(props) {
    
    const handleFilter = (event) => {
        props.handleFilter(event.target.value)
    }

    return (
        <Form className="filter-container" onSubmit={props.handleSubmit}>
            <Form.Label htmlFor="filter">FILTER BY:</Form.Label>
            <Form.Select className="filter" onChange={handleFilter}>
                <option className="option" value="dry-goods">&nbsp; Dry Goods &nbsp;</option>
                <option className="option" value="produce">&nbsp; Produce &nbsp;</option>
                <option className="option" value="good-items">&nbsp; Items that are good to sell &nbsp;</option>
                <option className="option" value="need-to-go">&nbsp; Items that are good to donate  &nbsp;</option>
            </Form.Select>
        </Form>

    )
}

export default Filter;