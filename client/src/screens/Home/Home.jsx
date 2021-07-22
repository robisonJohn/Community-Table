import "./Home.css";
import { Layout } from "../../components";

const Home = (props) => {
  return (
    <Layout>
      <div className="home">
        <div className="main-img">
          <div className="main-txt">
          <h3> BRINGING COMMUNITIES TOGETHER ONE FILLED TABLE  <br/>  AT A TIME</h3>
          <button className="sign-up-button">SIGN UP</button>
          </div>
        </div>

        <section className="category-box">
          <div className="produce">
            <h3 className="txt-category">PRODUCE</h3>
          </div>
          <div className="dry-goods">
            <h3 className="txt-category">DRY GOODS</h3>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
