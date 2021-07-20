import db from '../db/connection.js';
import Item from '../models/item.js';


const insertItemData = async () => {
    // reset database
    await db.dropDatabase()

        const items = [];

        await Item.insertMany(items);

    db.close();

}

insertItemData()