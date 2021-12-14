const {Router} = require('express');
const orderController = require('../controllers/order/order.controller');
const routerOrder = Router();
routerOrder.get('/:id',  orderController.get_order_items);
routerOrder.post('/:id',  orderController.add_order_item);

module.exports = routerOrder;
