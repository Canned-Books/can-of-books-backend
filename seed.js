'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/books.js');

async function seed() {

await Book.create({
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    description: "Rick Deckard struggles as a bounty hunter in San Francisco to destroy a new breed of androids nearly undetectable to humans. However, he finds himself battling with empathy for the supposed lifeless beings—especially when he must team up with one to achieve his goal.",
    status: 'true',
    //imageUrl: 'https://m.media-amazon.com/images/I/4120duYNDSL._AC_UF1000,1000_QL80_.jpg'
});

await Book.create({
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    description: "Man's Search for Meaning is a 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II, and describing his psychotherapeutic method, which involved identifying a purpose in life to feel positive about, and then immersively imagining that outcome.",
    status: 'false',
    //imageUrl: 'https://books.google.com/books/publisher/content?id=Xd6dDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0Q4aHfBNb5SEA8Fvurrzuunlbxew&w=1280'
});

await Book.create({
    title: 'The Idiot',
    author: 'Fyodor Dostoevsky',
    description: "The title is an ironic reference to the central character of the novel, Prince Lev Nikolayevich Myshkin, a young man whose goodness, open-hearted simplicity and guilelessness lead many of the more worldly characters he encounters to mistakenly assume that he lacks intelligence and insight. In the character of Prince Myshkin, Dostoevsky set himself the task of depicting 'the positively good and beautiful man.'",
    status: 'true',
    //imageUrl: 'https://m.media-amazon.com/images/I/71q2n5R+yPL._AC_UF1000,1000_QL80_.jpg'
});

await Book.create({
    title: 'The Princess Bride',
    author: 'William Goldman',
    description: 'Beautiful, flaxen-haired Buttercup has fallen for Westley, the farm boy, and when he departs to make his fortune, she vows never to love another. So when she hears that his ship has been captured by the Dread Pirate Roberts - who never leaves survivors - her heart is broken.',
    status: 'true',
    //imageUrl: 'https://m.media-amazon.com/images/I/71q2n5R+yPL._AC_UF1000,1000_QL80_.jpg'
});

mongoose.disconnect();
}

seed();