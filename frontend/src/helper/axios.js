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
    return(axios({
        method: "get",
        url: url,
    }))
}
export {
    userConnect,
    getBooks
}