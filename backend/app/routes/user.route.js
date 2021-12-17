/**
 * routes for user operations
 * @file:user.route.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const express = require('express')
const routerUser = express.Router()
const users = require('../controllers/user/user.controller.js');
const {userValidationRules, validate} = require('../middleware/user.middleware')
routerUser.post('/login', users.loginUser);
routerUser.post('/',userValidationRules(), validate, users.create);
routerUser.get('/', users.findAll);
routerUser.get('/:userId', users.findOne);
routerUser.put('/:userId', userValidationRules(), validate, users.update);
routerUser.delete('/:userId', users.delete);
routerUser.post("/forgot", users.forgotPassword);
routerUser.post("/reset/:token", users.resetPassword);
module.exports = routerUser
