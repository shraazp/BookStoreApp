/**
 * URL to connect to database
 * @file:book.service.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const {findBook, findAllBooks, update} = require('../models/book.model');
/**
 * @description to fetch all books from database
 * @returns promise
 */
const getBooks = () => {
    return findAllBooks()
}
/**
 * @description to fetch a books from database
 * @param {Object} productID
 * @returns promise
 */
const findABook = (findId) => {
    return findBook(findId)
}
/**
 * @description to update quantity of books when ordered
 * @param {Object} quantity 
 * @param {Object} productID
 * @returns promise
 */
const updateQuantity = (findId, quantity) => {
    return update(findId, quantity)
}
module.exports = {
    getBooks,
    findABook,
    updateQuantity
}
