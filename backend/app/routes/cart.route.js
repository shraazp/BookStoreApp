/**
 * routes for cart operations
 * @file:cart.route.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const {Router} = require('express');
const cartController = require('../controllers/cart/cart.controller');
const routerCart = Router();
const validation = require('../middleware/cart.middleware.js');
routerCart.get('/',validation.authenticateJWT , cartController.get_cart_items);
routerCart.post('/',  validation.authenticateJWT,cartController.add_cart_item);
routerCart.delete('/:itemId',validation.authenticateJWT, cartController.delete_item);
routerCart.delete('/', validation.authenticateJWT,cartController.delete_cart);
module.exports = routerCart;
