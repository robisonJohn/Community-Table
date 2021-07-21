import { NavLink } from "react-router-dom";
import "./NavBar.css";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-item">
      Add to Table
    </NavLink>
    <NavLink className="link" to="/logout">
      Logout
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/login">
      Login
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/inventory">
      Browse Inventory
    </NavLink>
  </>
);

const NavBar = ({ user }) => {
  return (
    <nav>
      <div className="NavBar">
        <NavLink className="logo" to="/">
          <img
            src="https://i.imgur.com/cyWp9Px.png"
            id="companylogo"
            width="275"
            alt="company logo"
          />
        </NavLink>
        <div className="links">
          {user && (
            <div className="link welcome">
              Welcome, {user.username} from {user.company_name}
            </div>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
