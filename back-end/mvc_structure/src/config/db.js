const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
};

module.exports = connectDB;

///db.js = Database connection file
// This file is responsible for establishing a connection to the MongoDB database using Mongoose. It defines an asynchronous function called connectDB that connects to the database using the connection string stored in the MONGO_URI environment variable. Once the connection is successful, it logs a message to the console. Finally, it exports the connectDB function for use in the server.js file.