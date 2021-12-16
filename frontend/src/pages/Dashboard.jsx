import React, {useEffect} from "react";
import {bookRetrieve} from "../service/getBooks";
import {cartRetrieve} from "../service/cartOp";
import {useDispatch} from "react-redux";
import {setBooks,setCart} from "../actions/booksActions"
import Home from '../components/TopBar'
import BookCard from "../components/bookCard";
import Paper from '@mui/material/Paper';
import Footer from "../components/footer";
const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
         fetchitem();
         fetchCart(); // eslint-disable-next-line
    }, []);
    const fetchitem = () => {
        bookRetrieve().then((res) => {
            dispatch(setBooks(res.data));
        }).catch((err) => {
            console.log(err);
        });
    };
    const fetchCart = () => {
        cartRetrieve().then((res) => {
            dispatch(setCart(res.data[0]));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    return (
       <div>
            <Home />
            <Paper variant="outlined" sx={{ mx: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } ,border:"none"}}>
                <BookCard/>  
            </Paper>
            <Footer/>
        </div>
    )
}
export default Dashboard;
