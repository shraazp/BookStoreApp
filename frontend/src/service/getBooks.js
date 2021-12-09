import { getBooks } from "../helper/axios";
const bookRetrieve = () => {
    let url = "http://localhost:5000/books"
    return getBooks(url).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};
export {bookRetrieve}