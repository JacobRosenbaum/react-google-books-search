const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  title: {
    type: String,
  },
  authors: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  }
})

const Books = mongoose.model('books', BookSchema);

module.exports = Books;