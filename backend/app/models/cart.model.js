/**
 * model of cart 
 * @file:cart.model.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * @description A schema for storing cart details
 */
const CartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [
        {
            productId: {
                type: String
            },
            name: String,
            author: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: [
                    1, 'Quantity can not be less then 1.'
                ],
                deafult: 1
            },
            price: Number,
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }
    ],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = Cart = mongoose.model('cart', CartSchema);
