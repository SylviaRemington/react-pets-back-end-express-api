// Imports
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');

// Import the controller file
const petRouter = require('./controllers/pets.js');

// MONGO connect to database
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware
app.use(express.json());
app.use(logger('dev'));
app.use(cors());


// Routes go here
// Add the petRouter to the `/pets` route
// All requests that we send to our application, if we want them to be handled by our pets router & sent to our pet router, it needs to be prepended with /pets
app.use('/pets', petRouter);




app.listen(3000, () => {
  console.log('The express app is ready!');
});

