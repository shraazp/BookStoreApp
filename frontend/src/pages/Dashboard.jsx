import React, {useEffect} from "react";
import { bookRetrieve } from "../service/getBooks";
import {useDispatch} from "react-redux";
import {setBooks} from "../actions/booksActions"
import TopBar from '../components/TopBar';
import BookCard from "../components/bookCard";
import "../styles/dashboard.scss"
const Dashboard=()=>{
    const dispatch = useDispatch();
    useEffect(() => { // eslint-disable-next-line
        fetchitem(); // eslint-disable-next-line
    }, []);
    const fetchitem = () => {
        bookRetrieve().then((res) => {
            dispatch(setBooks(res.data));
        }).catch((err) => {
            console.log(err); 
        });
    };
    
    return(
       <div className="dashboard" >
        <TopBar/>
        <BookCard/></div>
    )
}
export default Dashboard;