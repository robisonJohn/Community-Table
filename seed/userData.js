import db from '../db/connection.js';
import Item from '../models/item.js';
import User from '../models/user.js';

/*
Ashley and Andy insert data here
*/

const insertUserData = async () => {
    // reset database
    await db.dropDatabase()

    const users = []
    await User.insertMany(users)
    console.log('Created users!')

    // close database connection, done.
    db.close()
}

insertUserData();

