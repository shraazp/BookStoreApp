/**
 * to perform order operations
 * @file:order.service.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const Order= require('../models/order.model');
const {getCart} =require('./cart.service');
const {getcustomer}=require('./customer.service');
/**
 * @description to fetch a particular order
 * @param {Object} userId 
 * @returns 
 */
const getOrder = async (userId) => {
    let order;
    try {
        order = await Order.find({userId: userId})
    } catch (err) {
        console.log(err)
    }
    if (order && order[0].items.length > 0) {
        return order;
    } else {
        return null;
    }
}
/**
 * @description to add order in the database
 * @param {Object} userId 
 * @returns 
 */
const addToOrder = async (userId) => {
    let cart;
    let customerAddress;
    try {
        customerAddress = await getcustomer(userId);
    } catch (err) {
        console.log(err)
    }
    try {
        cart = await getCart(userId)
    } catch (err) {
        return("Cart is empty")
    }
    const newOrder = Order.create({
        userId:userId,
        customerId:customerAddress[0]._id,
        items: cart[0].items,
        bill: cart[0].bill,
        status:"dispatched"
    });
    return newOrder;
}
module.exports={
    addToOrder,
    getOrder
}