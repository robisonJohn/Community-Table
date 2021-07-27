import db from "../db/connection.js";
import Item from "../models/item.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const SALT_ROUNDS = 11;

  // insert user info here
  const user1 = new User({
    username: "lokimeas",
    company_name: "Loki's Fruit Shop",
    email: "loki@loveswatermelon.com",
    password_digest: await bcrypt.hash("peanutbutter123!", SALT_ROUNDS),
    addressOne: "4321 Charlwood St.",
    addressTwo: "n/a",
    city: "Lakewood",
    state: "CA",
    zip: "90713",
  });
  await user1.save();
  const user2 = new User({
    username: "abby5",
    company_name: "Flamingos Market on Second",
    email: "flamingos2021@flamingosmarket.com",
    password_digest: await bcrypt.hash("flaming0", SALT_ROUNDS),
    addressOne: "10 E 21st St #2",
    addressTwo: "Apartment #2",
    city: "New York",
    state: "NY",
    zip: "10010",
  });
  await user2.save();
  const user3 = new User({
    username: "forrestgump",
    company_name: "Forrest Supermarket",
    email: "forrestgump@runforrestrun.com",
    password_digest: await bcrypt.hash("jenny123", SALT_ROUNDS),
    addressOne: "21 Davis St.",
    addressTwo: "n/a",
    city: "Greenbow",
    state: "AL",
    zip: "36744",
  });
  await user3.save();
  const user4 = new User({
    username: "Bruno",
    company_name: "The Store",
    email: "root@super.gmail.com",
    password_digest: await bcrypt.hash("03Brun03", SALT_ROUNDS),
    addressOne: "65 River St.",
    addressTwo: "n/a",
    city: "Evansville",
    state: "IN",
    zip: "47711",
  });
  await user4.save();
  const user5 = new User({
    username: "Emma",
    company_name: "The butter market",
    email: "emma@gmail.com",
    password_digest: await bcrypt.hash("emma!", SALT_ROUNDS),
    addressOne: "67 Locust Court",
    addressTwo: "n/a",
    city: "Holland",
    state: "MI",
    zip: "49423",
  });
  await user5.save();
  const user6 = new User({
    username: "Ana-Sof",
    company_name: "Superama",
    email: "anso@gmail.com",
    password_digest: await bcrypt.hash("Ans0S123", SALT_ROUNDS),
    addressOne: "1N 5th St.",
    addressTwo: "n/a",
    city: "Brooklyn",
    state: "NY",
    zip: "11201",
  });
  await user6.save();

  // insert item here
  const items = [
    {
      name: "Bananas",
      category: "Produce",
      imgURL:
        "https://www.daysoftheyear.com/wp-content/uploads/banana-day1-scaled.jpg",
      benefits:
        "Bananas are rich in fiber, antioxidants and several nutrients. They can help moderate blood sugar levels after meals and may reduce appetite by slowing stomach emptying. Bananas are a good dietary source of potassium and magnesium — two nutrients that are essential for heart health.",
      quantity: "5",
      price: "5.7",
      shelfLife: "7",
      daysHeld: "5",
    },
    {
      name: "Pink Lady Apples",
      category: "Produce",
      imgURL:
        "https://theworldsbestfruit.online/wp-content/uploads/2014/10/pink-lady-2.jpg",
      benefits:
        "The Pink Lady apple is not just a taste sensation – it is also packed with vitality and remarkable nutritional assets. An apple contains 4% of vitamins and minerals, and provides ¼ of the recommended daily Vitamin C intakes. They limit the ageing of cells and reduce the permeability of blood vessels.",
      quantity: "9",
      price: "15.72",
      shelfLife: "7",
      daysHeld: "6",
    },
    {
      name: "Baby Carrots",
      category: "Produce",
      imgURL:
        "https://media.self.com/photos/60ff012fe8a6e3edda24d78f/4:3/w_2560%2Cc_limit/GettyImages-139745455.jpg",
      benefits:
        "Carrots are an excellent source of vitamin A in the form of beta carotene. They are also a good source of several B vitamins, as well as vitamin K and potassium.Eating carrots is linked to a reduced risk of cancer and heart disease, as well as improved eye health.",
      quantity: "12",
      price: "20",
      shelfLife: "18",
      daysHeld: "3",
    },
    {
      name: "Cereal",
      category: "Dry goods",
      imgURL:
        "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/article/2020/02/25/there-s-still-a-place-on-the-table-for-sugary-breakfast-cereals/10741891-1-eng-GB/There-s-still-a-place-on-the-table-for-sugary-breakfast-cereals_wrbm_large.jpg",
      benefits:
        "An excellent source of carbohydrates. a significant source of protein. a good source of B group vitamins, including folate. a good source of many minerals, such as iron, magnesium, copper, phosphorus and zinc.",
      quantity: "2",
      price: "22",
      shelfLife: "270",
      daysHeld: "47",
    },
    {
      name: "White Bread",
      category: "Dry goods",
      imgURL:
        "https://www.recipetineats.com/wp-content/uploads/2020/05/No-Yeast-Sandwhich-Bread_9-SQ.jpg",
      benefits:
        "White bread is fortified with calcium and four medium slices per   day would provide over 30% of the recommended daily intake of calcium which we need every day to maintain healthy bones and teeth.",
      quantity: "1",
      price: "42.9",
      shelfLife: "7",
      daysHeld: "6",
    },
    {
      name: "Eggs",
      category: "Produce",
      imgURL:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/283/283659/a-basket-of-eggs.jpg",
      benefits:
        "Eggs are a very good source of protein. More than half the protein of an egg is found in the egg white, which also includes vitamin B2 and lower amounts of fat than the yolk. Eggs are rich sources of selenium, vitamin D, B6, B12 and minerals such as zinc, iron and copper.",
      quantity: "4",
      price: "49.9",
      shelfLife: "35",
      daysHeld: "21",
    },
    {
      name: "Pasta",
      category: "Dry goods",
      imgURL:
        "https://h5j4s3b8.rocketcdn.me/wp-content/uploads/2020/12/31-pasta-noodles-scaled.jpg",
      benefits:
        "Pasta is made from grain, one of the basic food groups in a healthy diet that also can include vegetables, fruits, fish, and poultry. It's a good source of energy and can give you fiber, too, if it's made from whole grain. That can help with stomach problems and may help lower cholesterol.",
      quantity: "26",
      price: "13.1",
      shelfLife: "730",
      daysHeld: "207",
    },
    {
      name: "Red Pepper",
      category: "Produce",
      imgURL:
        "https://stirringmyspicysoul.com/wp-content/uploads/2019/07/IMG_0441.jpg",
      benefits:
        "Technically a fruit, red peppers are more common as a staple in the vegetable produce section. They're also an excellent source of vitamins A and C. Each half cup of raw red pepper provides you with 47 percent of your daily recommended intake of vitamin A and 159 percent of your vitamin C.",
      quantity: "73",
      price: "30",
      shelfLife: "14",
      daysHeld: "12",
    },
    {
      name: "Brown Rice",
      category: "Dry goods",
      imgURL:
        "https://media.istockphoto.com/photos/pile-of-brown-rice-with-a-wooden-spoon-picture-id884521540?k=6&m=884521540&s=612x612&w=0&h=yvDeNKkag9dP7tnm0qUVWcKdYk4-fw0ZKg267mkT1Qw=",
      benefits:
        "Many of the nutrients in brown rice help keep your heart healthy. It's a rich source of dietary fiber, which can reduce your risk of death from heart disease. Brown rice also contains high levels of magnesium, which can help make you less vulnerable to heart disease and stroke.",
      quantity: "18",
      price: "55.4",
      shelfLife: "365",
      daysHeld: "86",
    },
    {
      name: "Honeycrisp",
      category: "Produce",
      imgURL:
        "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/honeycrispapples.jpg",
      benefits:
        "The health benefits from eating apples are numerous. One medium Honeycrisp apple has 5 grams of fiber and only 80 calories. Because of the amount and type of fiber, an apple will help a person feel full longer, helping him or her to consume fewer calories daily. The pectin in apples may also help lower cholesterol.",
      quantity: "64",
      price: "30",
      shelfLife: "270",
      daysHeld: "103",
    },
    {
      name: "Oatmeal",
      category: "Dry goods",
      imgURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F04%2F26%2Fways-to-use-oats-2000.jpg",
      benefits:
        "The possible health benefits of oats include: reducing the risk of coronary artery disease, lowering levels of cholesterol, and reducing one's risk of colorectal cancer.",
      quantity: "85",
      price: "111.92",
      shelfLife: "730",
      daysHeld: "104",
    },
    {
      name: "Quinoa",
      category: "Dry goods",
      imgURL: "https://cdn.mos.cms.futurecdn.net/vhms7jsvKhV2Z6twmZvnn6.jpg",
      benefits:
        "Quinoa is a good source of protein, fiber, iron, copper, thiamin and vitamin B6 as well as an excellent source of magnesium, phosphorus, manganese and folate.",
      quantity: "32",
      price: "81.5",
      shelfLife: "730",
      daysHeld: "8",
    },
    {
      name: "Yellow Pepper",
      category: "Produce",
      imgURL:
        "https://cdn.shopify.com/s/files/1/0038/9405/0868/products/Pepper_Capsicum_Bell_Yellow_Qty_700x700.jpg?v=1556918915",
      benefits:
        "Red, Orange, and Yellow Bell Peppers are full of great health benefits—they're packed with vitamins and low in calories! They are an excellent source of vitamin A, vitamin C, and potassium. Bell Peppers also contain a healthy dose of fiber, folate, and iron.",
      quantity: "103",
      price: "30",
      shelfLife: "14",
      daysHeld: "7",
    },
    {
      name: "Whole Wheat Bread",
      category: "Dry goods",
      imgURL:
        "https://media.self.com/photos/5daa23395c250800081afa68/4:3/w_2560%2Cc_limit/sprouted-whole-grain-bread.jpg",
      benefits:
        "Whole grains are packed with nutrients including protein, fiber, B vitamins, antioxidants, and trace minerals (iron, zinc, copper, and magnesium). A diet rich in whole grains has been shown to reduce the risk of heart disease, type 2 diabetes, obesity, and some forms of cancer.",
      quantity: "26",
      price: "22",
      shelfLife: "7",
      daysHeld: "6",
    },
    {
      name: "White Rice",
      category: "Dry goods",
      imgURL:
        "https://media.newyorker.com/photos/5f2c85539a557880d973a759/1:1/w_1823,h_1823,c_limit/Buford-FrenchRice.jpg",
      benefits:
        "Though white rice is more processed, it's not necessarily bad. Most white rice in the US is enriched with vitamins like folate to improve its nutritional value. Additionally, its low fiber content may help with digestive issues. ",
      quantity: "102",
      price: "7.1",
      shelfLife: "100,000",
      daysHeld: "30",
    },
    {
      name: "Granny Smith",
      category: "Produce",
      imgURL:
        "https://www.jesmondfruitbarn.com.au/wp-content/uploads/2016/10/Jesmond-Fruit-Barn-Granny-Smith-Apples.jpg",
      benefits:
        "Researchers also found that eating Granny Smith's can help combat against chronic inflammation, which can lead to diabetes.",
      quantity: "91",
      price: "30",
      shelfLife: "36",
      daysHeld: "18",
    },
    {
      name: "Peanut Butter",
      category: "Dry goods",
      imgURL:
        "https://2.wlimg.com/product_images/bc-full/2019/8/1114307/peanut-butter-1565694105-5042709.jpeg",
      benefits:
        "Peanut butter provides a good amount of protein, along with essential vitamins and minerals, such as magnesium, potassium, and zinc.",
      quantity: "43",
      price: "19.94",
      shelfLife: "275",
      daysHeld: "12",
    },
    {
      name: "Almond Butter",
      category: "Dry goods",
      imgURL:
        "https://beamingbaker.com/wp-content/uploads/2019/05/IGT1-Easy-Homemade-Almond-Butter-Recipe-Step-by-Step-Tutorial-How-to-Make-it-1.jpg",
      benefits:
        "Almond butter is high in monounsaturated fats. Monounsaturated fats help to lower LDL (“bad”) cholesterol and raise HDL (“good”) cholesterol. Many other nutrients in almond butter also help improve your heart health and lower your risk for heart disease. Omega-3 fatty acids help prevent irregular heart rhythms.",
      quantity: "37",
      price: "132.9",
      shelfLife: "180",
      daysHeld: "16",
    },
    {
      name: "Tomato",
      category: "Produce",
      imgURL:
        "https://static.india.com/wp-content/uploads/2021/03/tomatoes-feature-image-1200.jpg",
      benefits:
        "Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer. They are also a great source of vitamin C, potassium, folate, and vitamin K.",
      quantity: "67",
      price: "20",
      shelfLife: "5",
      daysHeld: "4",
    },

    {
      name: "Watermelon",
      category: "Produce",
      imgURL:
        "https://www.ufseeds.com/dw/image/v2/BFKV_PRD/on/demandware.static/-/Sites-master-urbanfarmer/default/dw31116792/images/products/All_Sweet_Watermelon_Seeds.jpg?sw=450&sh=450",
      benefits:
        "Watermelon is a sweet and refreshing low calorie summer snack. It provides hydration and also essential nutrients, including vitamins, minerals, and antioxidants.",
      quantity: "51",
      price: "35",
      shelfLife: "21",
      daysHeld: "19",
    },
    {
      name: "Almond Flour",
      category: "Dry goods",
      imgURL:
        "https://cdn11.bigcommerce.com/s-dis4vxtxtc/images/stencil/1280x1280/products/3298/2444/image_1540__21505.1567254897.jpg?c=2",
      benefits:
        "Almond flour is grain- and gluten-free, as well as a good source of protein, unsaturated fat, magnesium, and vitamin E. Its nutty flavor suits a wide range of baked goods and savory dishes. ",
      quantity: "16",
      price: "25.6",
      shelfLife: "270",
      daysHeld: "267",
    },
    {
      name: "Green Pepper",
      category: "Produce",
      imgURL:
        "https://smileyfoodandstores.com/wp-content/uploads/2021/07/green-peppers.jpg",
      benefits:
        "Red, Orange, and Yellow Bell Peppers are full of great health benefits—they're packed with vitamins and low in calories! They are an excellent source of vitamin A, vitamin C, and potassium. Bell Peppers also contain a healthy dose of fiber, folate, and iron.",
      quantity: "39",
      price: "30",
      shelfLife: "14",
      daysHeld: "11",
    },
    {
      name: "Nutella",
      category: "Dry goods",
      imgURL:
        "https://foodbyjonister.com/wp-content/uploads/2019/01/IMG_1088-3.jpg",
      benefits:
        "Nutella is a hazelnut-chocolate spread similar to peanut butter but with a sweeter flavor. Though the spread contains saturated fat and sugar, it also supplies a good amount of key vitamins and minerals that you need for good health. The hazelnuts in Nutella might also boost the health of your heart, making it a fairly nutritious food to occasionally incorporate into your healthy eating plan.",
      quantity: "83",
      price: "41.6",
      shelfLife: "365",
      daysHeld: "32",
    },
    {
      name: "Onion",
      category: "Produce",
      imgURL:
        "https://www.chatelaine.com/wp-content/uploads/2018/08/types-of-onions.jpg",
      benefits:
        "Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides and reduce cholesterol levels — all of which may lower heart disease risk. Their potent anti-inflammatory properties may also help reduce high blood pressure and protect against blood clots.",
      quantity: "49",
      price: "10",
      shelfLife: "65",
      daysHeld: "63",
    },
  ];

  // insert items into database
  await Item.insertMany(items);
  console.log("Created users and products!");

  // close database connection. done.
  db.close();
};

insertData();
