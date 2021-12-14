/**
 * Entry point for the web application
 */
 
 const express = require('express');
 const dbConnect = require('./config/database.connect.js')
 const routeUser = require('./app/routes/user.route.js');
 const routerBook = require('./app/routes/book.route.js');
 require("dotenv").config();
 //var cors = require('cors')
 const app = express();
 app.use(express.urlencoded({extended: false}))
 app.use(express.json())
 const cors = require('cors');
const routerCart = require('./app/routes/cart.route.js');
const routerCustomer=require('./app/routes/customer.route.js');
const routerOrder = require('./app/routes/order.route.js');
 const corsOptions ={
     origin:'http://localhost:3000', 
     credentials:true,            //access-control-allow-credentials:true
     optionSuccessStatus:200
 }
 app.use(cors(corsOptions));
 app.use('/users', routeUser)
 app.use('/books', routerBook)
 app.use('/cart',routerCart)
 app.use('/customer',routerCustomer)
 app.use('/order',routerOrder)
 module.exports=app.listen(process.env.PORT, () => {
     console.log("Server is listening on port 5000");
     dbConnect();
 });
 