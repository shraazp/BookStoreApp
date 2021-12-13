const {findBook,
    findAllBooks
}=require('../models/book.model');

 const getBooks = () => {
    return findAllBooks()
}
const findABook=(findId)=>{
return findBook(findId)
}
module.exports ={
    getBooks,
    findABook
}