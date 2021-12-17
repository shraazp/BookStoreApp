import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {selectedBook, setCurrentPage} from '../actions/booksActions';
import { searchForBook } from '../service/getBooks';
import Logo from "../assets/education.png";
import InputBase from "@material-ui/core/InputBase";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router-dom";
import "../styles/Topbar.scss";
export default function Home() {
    let history = useHistory();
    const [search, setSearch] = useState("");
    const books = useSelector((state) => state.allBooks.books);
    const cart = useSelector((state) => state.allBooks.cartItems);
    const dispatch = useDispatch();
    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        dispatch(setCurrentPage(1))
    };
    useEffect(() => {
        searchForBook({"searchText":search}).then((res)=>{
            dispatch(selectedBook(res.data))
        }).catch((err)=>console.log(err))
        // eslint-disable-next-line
    }, [search, books]);
    return (<div className="mainDiv">
        <div className="topnav">
            <div className="block">
                <div>
                    <img src={Logo}
                        alt="FundooImg"/>
                    <div className="title"
                        onClick={
                            () => {
                                history.push("/dashboard")
                            }
                    }>BookStore</div>
                    <InputBase name="Search" placeholder="Search" className="input"
                        inputProps={
                            {'aria-label': 'search'}
                        }
                        startAdornment={<SearchIcon/>}
                        onChange={
                            (e) => handleSearch(e.target.value)
                        }/>
                </div>
                <div className="rightIcons">
                    <IconButton onClick={
                            () => {
                                history.push('/cart')
                            }
                        }
                        style={
                            {'marginTop': '1.5vh'}
                    }>
                        <div>
                            <ShoppingCartOutlinedIcon/> {
                            cart && (Object.keys(cart).length !== 0) && cart.items.length > 0 ? <span className="cart-count"> {
                                cart.items.length
                            }</span> : ""
                        } </div>
                    </IconButton>
                    <div>
                        Cart
                    </div>


                </div>

            </div>
        </div>
    </div>);
}
