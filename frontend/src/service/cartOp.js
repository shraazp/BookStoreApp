import {getToken} from '../utils/Common';
import {getCart, addCart, deleteCart} from '../helper/axios'
const token = getToken();
const cartRetrieve = () => {
    let url = `http://localhost:5000/cart/${token}`
    return getCart(url).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};

const create = (data) => {
    let url = `http://localhost:5000/cart/${token}`
    return addCart(url, data).then((response) => {
        return response
    }).catch((err) => {
        throw err
    })
}
const Delete=(id)=>{
    let url=`http://localhost:5000/cart/${token}/${id}`
    return deleteCart(url).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
}
export{
    cartRetrieve,
    create,
    Delete
}