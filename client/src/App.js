import { useEffect, useState } from "react";
import Home from "./screens/Home/Home";
import Items from "./screens/Items/Items";
import SignUp from "./screens/SignUp/SignUp";
import Login from "./screens/Login/Login";
import Logout from "./screens/Logout/Logout";
import AddItem from "./screens/AddItem/AddItem";
import ItemDetail from "./screens/ItemDetail/ItemDetail";
import ItemEdit from "./screens/ItemEdit/ItemEdit";
import Produce from './screens/Produce/Produce';
import DryGoods from './screens/DryGoods/DryGoods.jsx';
import { verifyUser } from "./services/users";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/inventory">
          <Items user={user} />
        </Route>
        <Route path="/produce">
          <Produce user={user}/>
        </Route>
        <Route path="/dry-goods">
          <DryGoods user={user}/>
        </Route>      
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/logout">
          <Logout setUser={setUser} />
        </Route>
        <Route path="/add-item">
          <AddItem user={user} />
        </Route>
        <Route exact path="/items/:id">
          <ItemDetail user={user} />
        </Route>
        <Route exact path="/items/:id/edit">
          {user ? <ItemEdit user={user} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
