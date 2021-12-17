/**
 * routes for book operations
 * @file:book.route.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const express = require('express')
const routerBook = express.Router()
const books = require('../controllers/books/book.controller.js');
routerBook.get('/', books.findAll);
module.exports = routerBook