import React, {useEffect} from "react";
import {bookRetrieve} from "../service/getBooks";
import {useDispatch} from "react-redux";
import {setBooks} from "../actions/booksActions"
import Home from '../components/Home'
import BookCard from "../components/bookCard";
import Paper from '@mui/material/Paper';
import "../styles/dashboard.scss"
const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
         fetchitem(); // eslint-disable-next-line
    }, []);
    const fetchitem = () => {
        bookRetrieve().then((res) => {
            dispatch(setBooks(res.data));
        }).catch((err) => {
            console.log(err);
        });
    };
    return (
       <div>
            <Home/>
            <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,border:"none"}}>
                <BookCard/>  
            </Paper>
        </div>
    )
}
export default Dashboard;
