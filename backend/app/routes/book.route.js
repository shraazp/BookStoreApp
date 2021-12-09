const express = require('express')
const routerBook = express.Router()
const books = require('../controllers/books/book.controller.js');
routerBook.get('/', books.findAll);
module.exports = routerBook