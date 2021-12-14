import {getToken} from '../utils/Common';
import {getCart, addCart, deleteCart} from '../helper/axios'
const token = getToken();
const cartRetrieve = () => {
    let url = "http://localhost:5000/cart"
    return getCart(url,`bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};

const create = (data) => {
    let url = "http://localhost:5000/cart"
    return addCart(url, data,`bearer ${token}`).then((response) => {
        return response
    }).catch((err) => {
        throw err
    })
}
const Delete=(id)=>{
    let url=`http://localhost:5000/cart/${id}`
    return deleteCart(url,`bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
}
const emptyCart=(id)=>{
    let url=`http://localhost:5000/cart/`
    return deleteCart(url,`bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
}
export{
    cartRetrieve,
    create,
    Delete,
    emptyCart
}