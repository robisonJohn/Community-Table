import "./Home.css";
import { Layout, ItemCards } from "../../components";

const Home = (props) => {
  return (
    <Layout>
      <div className="home">
        <ItemCards />
      </div>
    </Layout>
  );
};

export default Home;
