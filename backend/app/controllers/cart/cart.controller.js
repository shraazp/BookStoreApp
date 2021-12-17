/**
 * cart controller
 * @file:cart.controller.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const {getCart, addToCart, deleteProduct, deleteCart} = require('../../service/cart.service.js')
/**
   * @description to get the items in the cart
   * @param {Object} req 
   * @param {Object} res 
   * @returns data or erro
   */
module.exports.get_cart_items = async (req, res) => {
    const userId = req.body.userId
    try {
        const data = await getCart(userId);
        return res.send(data)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
 /**
   * @description to add an item to the cart
   * @param {Object} req 
   * @param {Object} res 
   * @returns data or error
   */
module.exports.add_cart_item = async (req, res) => {
    const userId = req.body.userId
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    try {
        const data = await addToCart(userId, productId, quantity)
        return res.status(201).send(data);

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
/**
   * @description to delete an item from the cart
   * @param {Object} req 
   * @param {Object} res 
   * @returns data or error
   */

module.exports.delete_item = async (req, res) => {
    const userId = req.body.userId
    const productId = req.params.itemId;
    try {
        let cart = await deleteProduct(userId, productId)
        return res.status(201).send(cart);

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
/**
   * @description to delete an entire cart
   * @param {Object} req 
   * @param {Object} res 
   * @returns data or error
   */
module.exports.delete_cart = async (req, res) => {
    const userId = req.body.userId

    try {
        let cart = await deleteCart(userId)
        return res.status(201).send(cart);

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
