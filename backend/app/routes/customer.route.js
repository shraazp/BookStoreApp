const {Router} = require('express');
const customerController = require('../controllers/customer/customer.controller');
const routerCustomer = Router();
const validation = require('../middleware/cart.middleware.js');
routerCustomer.get('/', validation.authenticateJWT, customerController.findCustomer);
routerCustomer.post('/',validation.authenticateJWT,  customerController.createCustomer);
module.exports = routerCustomer;
