const {
    getBooks
}=require("../../service/book.service")
exports.findAll = (req, res) => {
    getBooks().then(books => {
        res.send(books);
    }).catch(err => {
        return res.send(err)
});}
