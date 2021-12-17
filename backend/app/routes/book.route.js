/**
 * routes for book operations
 * @file:book.route.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const express = require('express')
const routerBook = express.Router()
const validation = require('../middleware/cart.middleware.js');
const books = require('../controllers/books/book.controller.js');
routerBook.get('/',validation.authenticateJWT, books.findAll);
// finds all book based on search key
routerBook.post("/search", validation.authenticateJWT, books.searchBook)
module.exports = routerBook