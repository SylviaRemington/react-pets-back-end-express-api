// models/pet.js
// Creating the pet schema by first importing mongoose

const mongoose = require('mongoose');

// Creating the actual model/schema
// models/pet.js

const petSchema = mongoose.Schema({
  name: {type: String, required: true,},
  age: {type: Number, min: 0, required: true,},
  breed: String,
});


