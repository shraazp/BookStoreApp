const{
    createCustomer,
    findCustomer
} =require('../models/customer.model')
const createNewCustomer = (userId,customerDetails) => {
    return createCustomer(userId,customerDetails)
}
const getcustomer = (findId) => {
    return  findCustomer(findId)
  }
  module.exports={
      createNewCustomer,
      getcustomer
  }