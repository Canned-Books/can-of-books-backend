'use strict';

const mongoose = require('mongoose');

//connect to our database
require('dotenv').config(); //this requires our .env file for its configuration
mongoose.connect(process.env.DB_URL); //again this is in the .env file

//pulls from our models folder
const Book = require('./models/books.js');


/*
  const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: Boolean, required: true }, //did you read it? T = Yes
});
*/


async function seed() {

  await Book.create({
    title: 'The Grapes of Wrath',
    description: 'A book about grapes and wrath',
    author: 'Frank Galati',
    status: false
  });

  console.log('The Grapes of Wrath was created!');

  await Book.create({
    title: "Man's Search for Meaning",
    description: 'Surviving the horrors of WW2',
    author: 'Viktor Frankl',
    status: true
  });

  console.log('Mans Search for Meaning was created');

  await Book.create({
    title: 'Do Androids Dream of Electric Sheep',
    description: 'Does artificial intelligence create consciousness',
    author: 'Phillip K Dick',
    status: true
  });

  console.log('Do Androids Dream of Electric Sheep was created');

  mongoose.disconnect();
}

seed();