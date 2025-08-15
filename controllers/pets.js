// controllers/pets.js
// adding imports below:
const express = require('express');
const router = express.Router();

// adding the import statement for Pet here from the models:
const Pet = require('../models/pet.js');

// defining the route - using the POST method on the router object to create the route
// and pass in the path and a callback function:
// CREATE - POST - /pets
router.post('/', async (req, res) => {
    // res.send sends a template
    res.json({message: "this is json from the create route"});
    // this above says take this javascript object, convert it to json and send that as a response
});
// ABOVE ROUTER.POST, YOU CAN SEE THE RESULT OF THIS AND TEST THIS OUT IN POSTMAN
// ANYTIME WHEN BUILD OUT A REST API, USE POSTMAN TO TEST IT SINCE IT'S A JSON AND YOU CAN'T TEST IT BY SEEING IT IN THE BROWSER LIKE WE COULD WITH EJS









// Export the router at the bottom of the file
module.exports = router;

// Addtl Notes:
// We need the Pet model in many of our routes, so we import it here from models/pets.js. 
// Similarly to our models directory, we’ll be using a controllers directory 
// to help keep a clear separation of concerns. 
