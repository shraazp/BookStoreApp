const {Router} = require('express');
const orderController = require('../controllers/order/order.controller');
const routerOrder = Router();
const validation = require('../middleware/cart.middleware.js');
routerOrder.get('/', validation.authenticateJWT, orderController.get_order_items);
routerOrder.post('/', validation.authenticateJWT, orderController.add_order_item);
module.exports = routerOrder;
