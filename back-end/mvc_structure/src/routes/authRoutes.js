const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/authController");
const { registerValidator } = require("../validator/authValidator");

router.post("/register", registerValidator, registerUser);

module.exports = router;

//authRoutes.js = Authentication routes file
// This file defines the routes related to user authentication. It imports the Express module and creates a router instance. It also imports the registerUser controller function and the registerValidator middleware. The router defines a POST route for user registration, which applies the validation middleware before calling the controller function. Finally, it exports the router for use in the app.js file.