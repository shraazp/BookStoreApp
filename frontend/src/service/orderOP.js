import {getToken} from '../utils/Common';
import {getCart, addCart} from '../helper/axios'
const token = getToken();
const getOrder = () => {
    let url = `http://localhost:5000/order/`
   return getCart(url,`bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};

const createOrder = (data) => {
    let url = `http://localhost:5000/order/`
    return addCart(url,data,`bearer ${token}`).then((response) => {
        return response
    }).catch((err) => {
        throw err
    })
}

export{
    getOrder,
    createOrder
}