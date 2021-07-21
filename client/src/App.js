import { getItems } from "./services/items.js";
import { useEffect, useState } from "react";
import Home from "./screens/Home/Home";
import { lowestQuantity, highestQuantity } from "./utils/sort.js";
import { filterDryGoods, filterProduce } from "./utils/filter.js";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// we can also test our sort and filter functions

// getItem, createItem, updateItem, deleteItem

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
      console.log("set items completed");
    };
    fetchItems();
  }, []);
  console.log(items);
  console.log(
    `From lowest quantity to highest quantity: ${lowestQuantity(items)}`
  );
  console.log(
    `From highest quantity to lowest quantity: ${highestQuantity(items)}`
  );
  console.log(`Only dry goods: ${filterDryGoods(items)}`);
  console.log(`Only produce: ${filterProduce(items)}`);

  return (
    <div className="App">
      <h1>hello there</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
