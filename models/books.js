'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true }, //did you read it? T = Yes
    //imageUrl: { type: String, required: true }
});

//this is tied to the book-db in the .env file
const Book = mongoose.model('book', bookSchema);

module.exports = Book; //should be good here