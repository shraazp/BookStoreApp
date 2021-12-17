/**
 *order controller
 * @file:order.controller.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const {addToOrder, getOrder} = require("../../service/order.service")
/**
 * @description to fetch all the ordered item(s) from the database
 * @param {Object} req 
 * @param {Object} res 
 * @returns data or error
 */
module.exports.get_order_items = async (req, res) => {
    const userId = req.body.userId
    try {
        const data = await getOrder(userId);
        return res.send(data)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
/**
 * @description to add an ordered item(s) to the database
 * @param {Object} req 
 * @param {Object} res 
 * @returns data or error
 */
module.exports.add_order_item = async (req, res) => {
    const userId = req.body.userId
    try {
        const data = await addToOrder(userId)
        return res.status(201).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
