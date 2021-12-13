import React, {useEffect,useState} from "react";
import {bookRetrieve} from "../service/getBooks";
import {cartRetrieve} from "../service/cartOp";
import {useDispatch,useSelector} from "react-redux";
import {setBooks, setCart} from "../actions/booksActions"
import Home from '../components/Home'
import BookCard from "../components/bookCard";
import Cart from "./Cart";
import "../styles/dashboard.scss"
const Dashboard = () => {
    const [showCart,setShowCart]=useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        // eslint-disable-next-line
        // eslint-disable-next-line
        fetchCart();
         fetchitem(); // eslint-disable-next-line
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
    const cart = useSelector((state) => state.allBooks.cartItems)
    return (
        <div>
            <Home setShowCart={setShowCart}/>
            {(showCart)?(cart.length===undefined?<Cart cart={cart}/>:console.log("hi")):<div className="menubar">
                <BookCard/></div>   }
            
              
               
        </div>
    )
}
export default Dashboard;
