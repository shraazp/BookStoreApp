import axios from 'axios'
import {setUserSession} from '../utils/Common';
const userConnect = (url, datas) => {
    return axios({method: "post", url: url, data: datas}).then(function (response) {
        setUserSession(response.data.message)
        return(response.data)
    }).catch(function (error) {
        throw(error);
    });
}
const getBooks = (url) => {
    return(axios({method: "get", url: url}))
}
const getCart = (url, token) => {
    return(axios({
        method: "get",
        url: url,
        headers: {
            Authorization: token
        }
    }))
}

const addCart = (url, data, token) => {
    return(axios({
        method: "post",
        url: url,
        data: data,
        headers: {
            Authorization: token
        }
    }))
}
const deleteCart=(url,token)=>{
    return(axios({
        method:"delete",
        url:url,
        headers: {
            Authorization: token
        }
    }))
}
export {
    userConnect,
    getBooks,
    getCart,
    addCart,
    deleteCart
}
