/**
 * to perform customer operations
 * @file:customer.service.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const {createCustomer, findCustomer, updateCustomer} = require('../models/customer.model')
 /**
   * @description to add new customer details
   * @param {Object} userId 
   * @param {Object} customerDetails 
   * @returns error or data
   */
const createNewCustomer = (userId, customerDetails) => {
    return findCustomer(userId).then((res) => {
        return(res.length === 0) ? (createCustomer(userId, customerDetails)) : (updateCustomer(userId, customerDetails))
    }).catch((err) => {
        throw err
    })
}

  /**
   * @description to get a customer detail
   * @param {Object} findId 
   * @returns data
   */
const getcustomer = (findId) => {
    return findCustomer(findId)
}
module.exports = {
    createNewCustomer,
    getcustomer
}
