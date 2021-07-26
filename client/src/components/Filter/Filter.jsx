import './Filter.css';

function Filter(props) {
    
    const handleFilter = (event) => {
        props.handleFilter(event.target.value)
    }

    return (
        <form className="filter-container" onSubmit={props.handleSubmit}>
            <label htmlFor="filter">FILTER BY:</label>
            <select className="filter" onChange={handleFilter}>
                <option className="option" value="dry-goods">&nbsp; Dry Goods &nbsp;</option>
                <option className="option" value="produce">&nbsp; Produce &nbsp;</option>
                <option className="option" value="good-items">&nbsp; Items that are good to sell &nbsp;</option>
                <option className="option" value="need-to-go">&nbsp; Items that are good to donate  &nbsp;</option>
            </select>
        </form>

    )
}

export default Filter;