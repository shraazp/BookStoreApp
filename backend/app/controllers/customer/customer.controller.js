/**
 * customer controller
 * @file:customer.controller.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const {createNewCustomer, getcustomer} = require("../../service/customer.service")
/**
 * @description to add new customer address
 * @param {Object} req 
 * @param {Object} res 
 */
exports.createCustomer = (req, res) => {
    const userId = req.body.userId
    const customerDetails = req.body;
    createNewCustomer(userId, customerDetails).then(result => {
        res.send(result);
    }).catch(err => {
        return res.send(err)
    });
}
/**
 * @description to find a customer detail
 * @param {Object} req 
 * @param {Object} res 
 */
exports.findCustomer = (req, res) => {
    const userId = req.body.userId
    getcustomer(userId).then(address => {
        res.send(address);
    }).catch(err => {
        return res.send(err)
    });
}
