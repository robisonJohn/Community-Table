import db from '../db/connection.js';
import Item from '../models/item.js';
import User from '../models/user.js';


const insertData = async () => {
    // reset database
    await db.dropDatabase();

    // insert user info here
    


    // insert item here
    const items = [
            {
                name: "Bananas",
                category: "Produce",
                imgURL: "https://www.daysoftheyear.com/wp-content/uploads/banana-day1-scaled.jpg",
                benefits:
                "Bananas are rich in fiber, antioxidants and several nutrients. They can help moderate blood sugar levels after meals and may reduce appetite by slowing stomach emptying. Bananas are a good dietary source of potassium and magnesium — two nutrients that are essential for heart health.",
                quantity: "5",
            },
            {
                name: "Baby Carrots",
                category: "Produce",
                imgURL: "https://4.allegroimg.com/original/03d72f/491c81e54590a5abfb6630b9fec4/Wyhoduj-Swoje-EKO-Warzywa-Marchew-Flakkese2-Pozna-Rodzaj-rosliny-marchew",
                benefits:
                "Carrots are an excellent source of vitamin A in the form of beta carotene. They are also a good source of several B vitamins, as well as vitamin K and potassium.Eating carrots is linked to a reduced risk of cancer and heart disease, as well as improved eye health.",
                quantity: "12",
            },
            {
                name: "Pink Lady Apples",
                category: "Produce",
                imgURL: "https://www.gardenia.net/storage/app/public/uploads/images/detail/shutterstock_354378542Optimized.jpg",
                benefits:
                "The Pink Lady apple is not just a taste sensation – it is also packed with vitality and remarkable nutritional assets. An apple contains 4% of vitamins and minerals, and provides ¼ of the recommended daily Vitamin C intakes. They limit the ageing of cells and reduce the permeability of blood vessels.",
                quantity: "9",
            },
            {
                name: "Cereal",
                category:"Dry goods",
                imgURL: "https://www.verywellhealth.com/thmb/tpbMozgUK6OhHKFrY0crL2Y1gLA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/30D7A016-ABA5-48DD-BE39-3E7A223A03BF-96f2ba9e6c724dc9b2ba638b0c0f44a2.jpeg",
                benefits:
                "An excellent source of carbohydrates. a significant source of protein. a good source of B group vitamins, including folate. a good source of many minerals, such as iron, magnesium, copper, phosphorus and zinc.",
                    quantity: "2" ,
                },
                {
                    name: "White Bread" ,
                    category:"Dry goods",
                    imgURL: "https://healthynibblesandbits.com/wp-content/uploads/2019/12/Milk-Bread-9.jpg",
                    benefits:
                    "White bread is fortified with calcium and four medium slices per   day would provide over 30% of the recommended daily intake of calcium which we need every day to maintain healthy bones and teeth.",
                    quantity:  "1" 
                },
                {
                    name: "Eggs",
                    category:"Produce",
                    imgURL: "https://addapinch.com/wp-content/uploads/2016/03/eggs-DSC_1237-480x270.jpg",
                    benefits:
                "Eggs are a very good source of protein. More than half the protein of an egg is found in the egg white, which also includes vitamin B2 and lower amounts of fat than the yolk. Eggs are rich sources of selenium, vitamin D, B6, B12 and minerals such as zinc, iron and copper.",
                    quantity: "4",
                },
    ]

    // insert items into database
    await Item.insertMany(items)
    console.log('Created users and products!')

    // close database connection. done.
    db.close()
}

insertData();