// controllers/pets.js

// adding imports below:
const express = require('express');
const router = express.Router();

// adding the import statement here:
const Pet = require('../models/pet.js');








// Export the router at the bottom of the file
module.exports = router;

// Addtl Notes:
// We need the Pet model in many of our routes, so we import it here from models/pets.js. 
// Similarly to our models directory, we’ll be using a controllers directory 
// to help keep a clear separation of concerns. 
