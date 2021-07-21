import "./Home.css";
import { Layout, ItemCards } from "../../components";

const Home = (props) => {
  return (
    <Layout>
      <div className="home">
        <div className="main-img">
          <h3> BRINGING COMMUNITIES TOGETHER ONE FILLED TABLE AT A TIME</h3>
          <img
            src="https://www.phillymag.com/wp-content/uploads/sites/3/2015/03/MO-grocery-delivery-jason-varney-940x540.jpg"
            alt="groceries"
          />
          <button>Sign Up</button>
        </div>

        <section>
          <div className="catergories-img">
            <img
              src="https://cdn.apartmenttherapy.info/image/upload/v1556919377/k/Photo/Lifestyle/Lifestyle_-_Kitchn_Guide_to_Storing_Produce_and_Vegetables_2019-04-30_PHOTO_Kitchn66447_.jpg"
              alt="produce"
              width="500"
            />
            <h3>Produce</h3>
          </div>
          <div className="catergories-img">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/907/539/595/cereal-food-bread-noodles-wheat-hd-wallpaper-thumb.jpg"
              alt="dry-goods"
              width="500"
            />
            <h3>Dry Goods</h3>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
