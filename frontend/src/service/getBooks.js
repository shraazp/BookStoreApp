import { getBooks,searchBooks } from "../helper/axios";
import {getToken} from '../utils/Common';
const token = getToken();
const bookRetrieve = () => {
    let url = "http://localhost:5000/books"
    return getBooks(url,`bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};
const searchForBook=(data)=>{
    let url = "http://localhost:5000/books/search"
    return searchBooks(url,data,`bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
}
const sortBook=(data)=>{
    let url = "http://localhost:5000/books/sort"
    return searchBooks(url,data,`bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
}
export {bookRetrieve,searchForBook,sortBook}