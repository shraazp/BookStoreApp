import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {selectedBook,setCurrentPage} from '../actions/booksActions';
import "../styles/navbar.css"
import InputBase from "@material-ui/core/InputBase";
const TopBar = () => {
    const [search, setSearch] = useState("");
    const books = useSelector((state) => state.allBooks.books);
    const dispatch = useDispatch();
    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        dispatch(setCurrentPage(1))
    };
    useEffect(() => {
        fetchCart()
        dispatch(selectedBook(books.filter((item) => {
            return(item.title.toLowerCase().includes(search.toLowerCase()) || (item.author.toLowerCase().includes(search.toLowerCase())));
        })))
        // eslint-disable-next-line
    }, [search, books]);
    const fetchCart = () => {
        cartRetrieve().then((res) => {
            console.log("hi"+res);
            dispatch(setCart(res));
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <nav>
            <div className="navWide">
                <div className="wideDiv">
                    <div className="heading-icon">
                        <div className="heading">
                            BookStore
                        </div>
                    </div>

                    <div className="search-bar">
                        <InputBase name="Search" placeholder="Search"
                            onChange={
                                (e) => handleSearch(e.target.value)
                            }/>
                    </div>
                    <div className="cart-icon" />
                    <div className="cart">
                        Cart
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default TopBar
