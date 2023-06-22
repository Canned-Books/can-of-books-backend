'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/books');

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received');

});

app.listen(PORT, () => console.log(`listening on ${PORT}`));

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.get('/books', getBooks);

async function getBooks(request, response, next){
  try {
    // TODO: GET ALL books FROM THE DB
    let allBooks = await Book.find({});

    // TODO: SEND THOSE CATS ON THE RESPONSE
    response.status(200).send(allBooks);
  } catch (error) {
    next(error);
  }
}

app.post('/books', addBook);

async function addBook(request, response, next){
  console.log(request.body);
  try {
    let createdBook = await Book.create(request.body);

    response.status(200).send(createdBook);
  } catch (error) {
    next(error);
  }
}

app.delete('/books/:bookID', deleteBook);

async function deleteBook(request, response, next){
  console.log(request.params);
  try {
    let id = request.params.bookID;
    await Book.findByIdAndDelete(id);
    response.status(200).send('book was deleted from database');

  } catch (error) {
    next(error);
  }
}

app.put('/books/:bookID', updateBook);

async function updateBook(request, response, next){
  try {

    let id = request.params.bookID;
    let data = request.body;
    let updatedBook = await Book.findByIdAndUpdate(id, data, { new: true, overwrite: true });

    response.status(200).send(updatedBook);
    
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