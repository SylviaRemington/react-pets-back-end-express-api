// models/pet.js
// Creating the pet schema by first importing mongoose
const mongoose = require('mongoose');

// Creating the actual model/ Defining the schema
const petSchema = mongoose.Schema({
  name: {type: String, required: true,},
  age: {type: Number, min: 0, required: true,},
  breed: String,
});

// registering the model
const Pet = mongoose.model('Pet', petSchema);

// exporting the model
module.exports = Pet;