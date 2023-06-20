'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//  **** require in the mongoose library ****
const mongoose = require('mongoose');

// **** require our MODEL ****
const Book = require('./models/books');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// define PORT validate env is working
const PORT = process.env.PORT || 3001;

// LISTEN
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));

// **** CONNECT OUR MONGODB USING MONGOOSE ****
// *** PER THE MONGOOSE DOCS **** 
mongoose.connect(process.env.DB_URL); // take in the string of my mongoDB

// *** HELPFUL FOR TROUBLESHOOTING IN TERMINAL WHY YOU CAN'T CONNECT TO YOUR MONGODB ***
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


// *** ENDPOINT TO RETREIVE ALL Books FROM THE DB ****

app.get('/books', getBooks);

async function getBooks(request, response, next){
  try {
    // TODO: GET ALL Books FROM THE DB
    let allBooks = await Book.find({});

    // TODO: SEND THOSE Books ON THE RESPONSE
    response.status(200).send(allBooks);
  } catch (error) {
    next(error);
  }
}

/** POST */
app.post('/books', addBook);

async function addBook(request, response, next){
  console.log(request.body);
  try {
    let createdBook = await Book.create(request.body);
    response.status(200).send('test from post endpoint');
  } catch (error) {
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
