const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Array,
    required: true
  },
  description: String,
  image: String,
  link: String
})

const Book = mongoose.model('booksDB', BookSchema);

module.exports = Book;