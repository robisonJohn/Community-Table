import "./Layout.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = (props) => (
  <div className="Layout">
    <NavBar user={props.user} />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
