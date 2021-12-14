const Order= require('../models/order.model');
const {getCart} =require('./cart.service');
const {getcustomer}=require('./customer.service');
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