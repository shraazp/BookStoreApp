const {
    createNewCustomer,
    getcustomer
}=require("../../service/customer.service")
exports. createCustomer = (req, res) => {
    const userId=req.params.id;
    const customerDetails=req.body;
    createNewCustomer(userId,customerDetails).then(result => {
        res.send(result);
    }).catch(err => {
        return res.send(err)
});}
exports.findCustomer = (req, res) => {
    const userId=req.params.id;
    getcustomer(userId).then(address => {
        res.send(address);
    }).catch(err => {
        return res.send(err)
});}