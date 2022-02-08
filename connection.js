// Do not change this file
require('dotenv').config();
const { MongoClient } = require('mongodb');

async function main(callback) {
    const URI = process.env.MONGO_URI; // Declare MONGO_URI in your .env file
    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {

        await client.connect();
        await callback(client);

    } catch (e) {
        console.error("Database Error: ", e);
        throw new Error('Unable to Connect to Database')
    }
}

module.exports = main;