/**
 * schema of book 
 * @file:book.model.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const mongoose = require('mongoose');
// to validate url
var validate = require('mongoose-validator')
var urlValidator = [validate(
        {
            validator: value => validator.isURL(value, {
                protocols: [
                    'http', 'https', 'ftp'
                ],
                require_tld: true,
                require_protocol: true
            }),
            message: 'Must be a Valid URL'
        }
    )]
/**
   * @description Schema for books
   */
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
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Book = mongoose.model('Book', BookSchema);
/**
 * @description to find all the books present in the database
 * @returns data
 */
const findAllBooks = () => {
    return Book.find()
}
/**
 * @description to find a book present in the database
 * @returns data
 */
const findBook = (findId) => {
    return Book.findById(findId)
}
/**
 * @description to update a book present in the database
 * @returns data
 */
const update = (findId, quantity) => {
    return Book.findByIdAndUpdate(findId).then((data) => {
        if (!data) {
            throw "some error";
        } else {
            (data.quantity = data.quantity - quantity)
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
/**
 * @description to search for  a book present in the database
 * @returns data
 */
const searchBook = async (searchText) => {
    try {
      let data = await Book.find();
      let filteredData = data.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.author.toLowerCase().includes(searchText.toLowerCase())
        );
      });
      return filteredData;
    } catch (error) {
      throw error;
    }
  };
  /**
 * @description to sort for  a book present in the database
 * @returns data
 */
const sortBooks=async(order)=>{
    try{
        return await Book.find().sort({price:order})
    }
    catch (error) {
        throw error;
      }
}
module.exports = {
    findBook,
    findAllBooks,
    update,
    searchBook,
    sortBooks
}
