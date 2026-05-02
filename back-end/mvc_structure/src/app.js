const express = require ("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

module.exports = app;

//app.js = Express app configuration file
// This file is responsible for setting up the Express application. It imports the Express module and the authentication routes from the src/routes/authRoutes.js file. It then creates an instance of the Express application, configures it to parse JSON request bodies, and sets up the route for authentication. Finally, it exports the app instance for use in the server.js file.