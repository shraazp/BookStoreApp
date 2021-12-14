const {createCustomer, findCustomer, updateCustomer} = require('../models/customer.model')
const createNewCustomer = (userId, customerDetails) => {
    return findCustomer(userId).then((res) => {
       return (res.length===0)?(createCustomer(userId, customerDetails)):( updateCustomer(userId, customerDetails))
    }).catch((err) => {
        throw err
    })
}

const getcustomer = (findId) => {
    return findCustomer(findId)
}
module.exports = {
    createNewCustomer,
    getcustomer
}
