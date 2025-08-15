// controllers/pets.js
// adding imports below:
const express = require('express');
const router = express.Router();

// adding the import statement for Pet here from the models:
const Pet = require('../models/pet.js');


// __________________________________________________________________________________________________

// CREATE ROUTE BELOW -- Creates new pets!

// defining the route - using the POST method on the router object to create the route
// and pass in the path and a callback function:
// CREATE - POST - /pets
// router.post('/', async (req, res) => {
    // res.send sends a template
    // res.json({message: "this is json from the create route"});
    // this above says take this javascript object, convert it to json and send that as a response
// });
// ABOVE ROUTER.POST, YOU CAN SEE THE RESULT OF THIS AND TEST THIS OUT IN POSTMAN
// ANYTIME WHEN BUILD OUT A REST API, USE POSTMAN TO TEST IT SINCE IT'S A JSON AND YOU CAN'T TEST IT BY SEEING IT IN THE BROWSER LIKE WE COULD WITH EJS
// You'll see what that route does.

// ---------

// Replacing above with what is below here -  create - post - /pets route which just sends a message with this create a pet route
// CREATE - POST - /pets
router.post('/', async (req, res) => {
  try {
    // Create a new pet with the data from req.body
    const createdPet = await Pet.create(req.body); //sending data to create a pet with // & then going to send it back 201 to the user with the front end// so it's going to be stored in the database
    // if don't send data (above), it's not going to work // but why isn't it going to work?
    res.status(201).json(createdPet); // 201 Created
  } catch (err) {
    // Setup for error handling
    res.status(500).json({ err: err.message }); //if there is an error we'll return this error message
  }
});

// (201) - Be sure to include a status of 201 Created with your json response body.


// __________________________________________________________________________________________________

// INDEX ROUTE BELOW -- Reading all the pets! Getting them and reading them.
// GET ROUTE BELOW - READ INDEX ROUTE

// READ - GET - /pets
router.get('/', async (req, res) => {
  try {
    const foundPets = await Pet.find();
    res.status(200).json(foundPets);  // 200 OK
  } catch (err) {
    // Add error handling code
    res.status(500).json({ err: err.message }); // 500 is an Internal Server Error
  }
});


// __________________________________________________________________________________________________

// SHOW ROUTE BELOW -- Gets one petId via find by Id and then has a try catch with a throw in there. 
// READ - GET - /pets/:petId
router.get('/:petId', async (req, res) => {
  try {
    // Add query to find a single pet
    const foundPet = await Pet.findById(req.params.petId);
    // req.params is in the url & query strings are after the question mark
    // res.status(200).json(foundPet); // 200 OK
    if (!foundPet) {
      res.status(404);
      throw new Error('Pet not found.');
    //when we throw, we send this to the catch block for error. So this becomes the error.
    }
    res.status(200).json(foundPet);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      // Add else statement to handle all other errors
      res.status(500).json({ err: err.message });
    }
  }
});

// __________________________________________________________________________________________________

// DELETE ROUTE
// DELETE - DELETE - /pets/:petId

router.delete("/:petId", async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.petId);
    return res.status(204).json({});
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});


// __________________________________________________________________________________________________

// UPDATE - PUT - /pets/:petId
router.put("/:petId", async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body);
    res.status(200).json(updatedPet);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});


// __________________________________________________________________________________________________


// Export the router at the bottom of the file
module.exports = router;

// Addtl Notes:
// We need the Pet model in many of our routes, so we import it here from models/pets.js. 
// Similarly to our models directory, we’ll be using a controllers directory 
// to help keep a clear separation of concerns. 

// __________________________________________________________________________________________________
