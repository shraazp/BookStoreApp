const mongoose = require('mongoose');
//to validate url
var validate = require('mongoose-validator')
var urlValidator = [validate( { 
    validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
    message: 'Must be a Valid URL' 
  })]
const BookSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        // validate: urlValidator
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Book = mongoose.model('Book', BookSchema);

 const findAllBooks = () => {
    return Book.find()
}
const findBook=(findId)=>{
  return Book.findById(findId)
}
const update=(findId,quantity)=>{
    return Book.findOneAndUpdate(findId).then((data) => {
        if (!data) {
            throw "some error";
        } else {
            (data.quantity = data.quantity-quantity)
            return data.save().then((data) => {
                return data;
            }).catch((err) => {
                throw err;
            });
        }
    }).catch((err) => {
        throw err;
    });
};

module.exports= {
    findBook,
    findAllBooks,
    update
}