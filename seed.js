'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {

await Book.create({
    title: 'Life of Pi',
    description: 'Life of Pi is a masterful and utterly original novel that is at once the story of a young castaway who faces immeasurable hardships on the high seas, and a meditation on religion, faith, art and life that is as witty as it is profound',
    status: 'available',
    imageUrl: 'https://m.media-amazon.com/images/I/4120duYNDSL._AC_UF1000,1000_QL80_.jpg'
});

console.log('Life of Pi worked!');

await Book.create({
    title: 'White Fang',
    description: 'White Fang” is a 1906 novel by American writer Jack London that tells the tale of a wild wolfdog who resides in the Yukon Territory and the Northwest Territories of Canada during the Klondike Gold Rush in the 1890s. Presented from the four-legged protagonists point of view, it is the charming story of White Fangs journey from the wilderness to domestication',
    status: 'available',
    imageUrl: 'https://books.google.com/books/publisher/content?id=Xd6dDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0Q4aHfBNb5SEA8Fvurrzuunlbxew&w=1280'
});

console.log('White Fang Worked!');

await Book.create({
    title: 'Red Mars',
    description: 'Winner of the Nebula Award for Best Novel - Discover the novel that launched one of science fictions most beloved, acclaimed, and awarded trilogies: Kim Stanley Robinsons masterly near-future chronicle of interplanetary colonization.',
    status: 'available',
    imageUrl: 'https://m.media-amazon.com/images/I/71q2n5R+yPL._AC_UF1000,1000_QL80_.jpg'
});

console.log('Red Mars Worked!');

mongoose.disconnect();
}

seed();