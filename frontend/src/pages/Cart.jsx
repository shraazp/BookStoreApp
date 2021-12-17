import React, {useEffect} from "react";
import {cartRetrieve} from "../service/cartOp";
import {useDispatch,useSelector} from "react-redux";
import { setCart} from "../actions/booksActions"
import Home from '../components/TopBar'
import CartCard from "../components/cartCard";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Footer from "../components/footer";
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
            <Paper variant="outlined" sx={{ mx: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,border:"none"}}>
                {cart&&(Object.keys(cart).length !== 0)?
                <CartCard cart={cart}/>: 
                <Paper variant="outlined" sx={{ m: { xs: 1, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
                    <Typography variant="h6" gutterBottom  sx={{ py:3 }}>
                            My Cart (0 items)
                    </Typography></Paper>
                }
                
    </Paper>
    <Footer/>
    </React.Fragment>
    )
}
export default Cart;
