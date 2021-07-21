import './App.css';
import { getItems } from './services/items.js'
import { useEffect, useState } from 'react';

// getItem, createItem, updateItem, deleteItem

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems)
      console.log('set items completed')
    }
    fetchItems()
  }, [])
  console.log(items);


  return (
    <div className="App">
      <h1>hello there</h1>
    </div>
  );
}

export default App;
