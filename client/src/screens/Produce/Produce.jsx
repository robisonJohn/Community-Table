import { useState, useEffect } from "react";
import { Layout, Item } from "../../components";
import { getItems } from "../../services/items";
import "./Produce.css";
import {
  lowestQuantity,
  highestQuantity,
  lowestPrice,
  highestPrice,
  lowestShelfLife,
  highestShelfLife,
} from "../../utils/sort.js";
import {
  filterDryGoods,
  filterProduce,
  goodItems,
  needToGo,
} from "../../utils/filter.js";
import Sort from "../../components/Sort/Sort";
import Filter from "../../components/Filter/Filter";

const Items = (props) => {
  const [items, setItems] = useState([]);

  const [applyFilter, setApplyFilter] = useState(false);
  const [filterType, setFilterType] = useState("dry-goods");
  const [filterResult, setFilterResult] = useState([]);

  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("lowest-quantity");

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
    };
    fetchItems();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    /*
    "lowest-quantity"
    "highest-quantity"
    "lowest-price"
    "highest-price"
    "lowest-shelf-life"
    "highest-shelf-life"
    */

    switch (type) {
      case "lowest-quantity":
        setFilterResult(lowestQuantity(filterResult));
        break;
      case "highest-quantity":
        setFilterResult(highestQuantity(filterResult));
        break;
      case "lowest-price":
        setFilterResult(lowestPrice(filterResult));
        break;
      case "highest-price":
        setFilterResult(highestPrice(filterResult));
        break;
      case "lowest-shelf-life":
        setFilterResult(lowestShelfLife(filterResult));
        break;
      case "highest-shelf-life":
        setFilterResult(highestShelfLife(filterResult));
        break;
      default:
        setFilterResult(filterProduce(items));
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleFilter = (type) => {
    if (type !== "" && type !== undefined) {
      setFilterType(type);
    }
    // dry-goods
    // produce
    // good-items
    // need-to-go
    switch (type) {
      case "dry-goods":
        setFilterResult(filterDryGoods(items));
        break;
      case "produce":
        setFilterResult(filterProduce(items));
        break;
      case "good-items":
        setFilterResult(goodItems(items));
        break;
      case "need-to-go":
        setFilterResult(needToGo(items));
        break;
      default:
        setFilterResult(filterProduce(items));
        break;
    }
  };

  if (applyFilter) {
    handleFilter(filterType);
    setApplyFilter(false);
  }

  const handleSubmit = (event) => event.preventDefault();

  let result = filterProduce(items);
  if (filterResult.length > 0) {
    result = filterResult;
  }

  return (
    <Layout user={props.user}>
      <div className="Produce">
        <h2 id="inventory-header">Table Inventory</h2>
        <div id="filter-sort">
          <Filter handleFilter={handleFilter} onSubmit={handleSubmit} />
          <Sort handleSort={handleSort} onSubmit={handleSubmit} />
        </div>

        <div className="items-container">
          {result.map((item, index) => {
            return (
              <Item
                _id={item._id}
                imgURL={item.imgURL}
                name={item.name}
                category={item.category}
                quantity={item.quantity}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Items;
