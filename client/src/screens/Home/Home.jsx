import "./Home.css";
import { Layout } from "../../components";

const Home = (props) => {
  return (
    <Layout>
      <div className="home">
        <div className="main-img">
          <div className="main-txt">
          <h3> BRINGING COMMUNITIES TOGETHER ONE FILLED TABLE  <br/>  AT A TIME</h3>
          <button className="sign-up-main">Sign Up</button>
          </div>
        </div>

        <section className="category-box">
          <div className="produce">
            <h3 className="txt-category">Produce</h3>
          </div>
          <div className="dry-goods">
            <h3 className="txt-category">Dry Goods</h3>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
