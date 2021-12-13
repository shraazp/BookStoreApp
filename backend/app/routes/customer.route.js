const {Router} = require('express');
const customerController = require('../controllers/customer/customer.controller');
const routerCustomer = Router();
routerCustomer.get('/:id',  customerController.findCustomer);
routerCustomer.post('/:id',  customerController.createCustomer);
module.exports = routerCustomer;
