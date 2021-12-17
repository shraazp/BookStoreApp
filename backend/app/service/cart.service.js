/**
 * to perform cart operations
 * @file:cart.service.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const Cart = require('../models/cart.model');
const {findABook, updateQuantity} = require('./book.service');
/**
 * @description to fetch cart from database
 * @param {Object} userId 
 * @returns data
 */
const getCart = async (userId) => {
    let cart;
    try {
        cart = await Cart.find({userId: userId})

    } catch (err) {
        console.log(err)
    }
    if (cart && cart[0].items.length > 0) {
        return cart;
    } else {
        return null;
    }
}
/**
 * @description to add  books to cart
 * if item is present it updates quantity or else if there are other items it adds to array or else creates new cart
 * @param {Object} userId 
 * @param {Object} productID
* @param {Object} quantity 
 * @returns data
 */
const addToCart = async (userId, productId, quantity) => {
    let item;
    let cart;
    try {
        cart = await Cart.find({userId: userId})

    } catch (err) {
        console.log(err)
    }
    try {
        item = await findABook(productId)
    } catch (err) {
        return("Item not found")
    }

    const price = item.price;
    const name = item.title;
    const description = item.description;
    const author = item.author;
    const image = item.image;
    updateQuantity(productId, quantity).then().catch(e => console.log(e))
    if (cart.length != 0) { // if cart exists for the user
        let itemIndex = cart[0].items.findIndex(p => p.productId == productId);
        // Check if product exists or not
        if (itemIndex > -1) {
            let productItem = cart[0].items[itemIndex];
            productItem.quantity += quantity;
            cart[0].items[itemIndex] = productItem;
        } else {
            cart[0].items.push({
                productId,
                name,
                author,
                quantity,
                price,
                description,
                image
            });
        } cart[0].bill += quantity * price;
        cart[0] = cart[0].save();
        return cart[0];
    } else { // no cart exists, create one
        const newCart = Cart.create({
            userId,
            items: [
                {
                    productId,
                    name,
                    author,
                    quantity,
                    price,
                    description,
                    image
                }
            ],
            bill: quantity * price
        });
        return newCart;
    }
}
/**
 * @description to delete a book from cart
  * @param {Object} userId 
 * @param {Object} productID
 * @returns data
 */
const deleteProduct = async (userId, productId) => {
    let cart;
    try {
        cart = await Cart.find({userId: userId})
    } catch (err) {
        console.log(err)
    }
    let itemIndex = cart[0].items.findIndex(p => p.productId == productId);
    if (itemIndex > -1) {
        let productItem = cart[0].items[itemIndex];
        cart[0].bill -= productItem.quantity * productItem.price;
        cart[0].items.splice(itemIndex, 1);
        updateQuantity(productId, - productItem.quantity).then().catch(e => console.log(e))
    }
    cart = await cart[0].save();
    return cart;
}
/**
 * @description to empty the cart
 * @param {Object} userId 
 * @returns data
 */
const deleteCart = async (userId) => {
    let cart;
    try {
        cart = await Cart.find({userId: userId})
    } catch (err) {
        console.log(err)
    }
    await cart[0].delete();
    return("Successfully deleted")
}
module.exports = {
    getCart,
    addToCart,
    deleteProduct,
    deleteCart
}
