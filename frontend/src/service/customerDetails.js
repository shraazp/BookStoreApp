import {getToken} from '../utils/Common';
import {getCart, addCart} from '../helper/axios'
const token = getToken();
const getCustomer = () => {
    let url = `http://localhost:5000/customer/${token}`
    return getCart(url).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};

const create = (data) => {
    let url = `http://localhost:5000/customer/${token}`
    return addCart(url, data).then((response) => {
        return response
    }).catch((err) => {
        throw err
    })
}
export{
    getCustomer,
    create
}