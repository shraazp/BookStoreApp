import React, {useEffect} from "react";
import {cartRetrieve} from "../service/cartOp";
import {useDispatch,useSelector} from "react-redux";
import { setCart} from "../actions/booksActions"
import Home from '../components/Home'
import CartCard from "../components/cartCard";
import Paper from '@mui/material/Paper';
import "../styles/dashboard.scss"
const Cart = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchCart(); // eslint-disable-next-line
    }, []);
    const fetchCart = () => {
        cartRetrieve().then((res) => {
            dispatch(setCart(res.data[0]));
        }).catch((err) => {
            console.log(err);
        });
    }
    const cart = useSelector((state) => state.allBooks.cartItems)
    return ( 
        <React.Fragment>
             <Home/>
            <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,border:"none"}}>
                {(cart.length===undefined?<CartCard cart={cart}/>:console.log("hi"))}
                
    </Paper>
    </React.Fragment>
    )
}
export default Cart;
