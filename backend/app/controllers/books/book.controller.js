/**
 * book controller
 * @file:book.controller.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
/**
 * @description to get all the books from the database
 * @param {Object} req 
 * @param {Object} res 
 */
const {getBooks} = require("../../service/book.service")
exports.findAll = (req, res) => {
    getBooks().then(books => {
        res.send(books);
    }).catch(err => {
        return res.send(err)
    });
}
