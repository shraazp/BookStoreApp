/**
 * routes for customer operations
 * @file:customer.route.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const {Router} = require('express');
const customerController = require('../controllers/customer/customer.controller');
const routerCustomer = Router();
const validation = require('../middleware/cart.middleware.js');
routerCustomer.get('/', validation.authenticateJWT, customerController.findCustomer);
routerCustomer.post('/',validation.authenticateJWT,  customerController.createCustomer);
module.exports = routerCustomer;
