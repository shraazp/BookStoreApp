const {findBook,
    findAllBooks,
    update 
}=require('../models/book.model');

 const getBooks = () => {
    return findAllBooks()
}
const findABook=(findId)=>{
return findBook(findId)
}
const updateQuantity=(findId,quantity)=>{
    return update(findId,quantity)
}
module.exports ={
    getBooks,
    findABook,
    updateQuantity
}