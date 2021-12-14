const {addToOrder, getOrder} = require("../../service/order.service")
module.exports.get_order_items = async (req, res) => {
    const userId=req.body.userId
    try {
        const data = await getOrder(userId);
        return res.send(data)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
module.exports.add_order_item = async (req, res) => {
    const userId=req.body.userId
    try {
        const data = await addToOrder(userId)
        return res.status(201).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}