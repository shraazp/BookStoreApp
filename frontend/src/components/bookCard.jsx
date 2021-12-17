import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PaginationPage from "./pagination";
import {sortByPrice, setCurrentPage, setCart} from '../actions/booksActions';
import {useDispatch} from "react-redux";
import "../styles/books.scss"
import useStyles from './useStyles';
import {create} from '../service/cartOp';
const BookCard = () => {
    const classes = useStyles();
    const books = useSelector((state) => state.allBooks.searchBooks);
    const cart = useSelector((state) => state.allBooks.cartItems)
    const currentPage = useSelector((state) => state.allBooks.currentPage)
    const [booksPerPage] = useState(12);
    const [sort, setSort] = useState("")
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const paginate = pageNumber => dispatch(setCurrentPage(pageNumber))
    const dispatch = useDispatch();
    const handleSort = (e) => {
        setSort(e.target.value)
        dispatch(sortByPrice(e.target.value))
        dispatch(setCurrentPage(1))
    }
    const HandleAddToCart = (productId) => {
        const data = {
            "productId": productId,
            "quantity": 1
        }
        create(data).then((res) => {
            dispatch(setCart(res.data))
        }).catch((err) => console.log(err.message));
    }

    const ButtonContainer = ({data}) => {
        return (<div className="buttonContainer">
            <Button className={
                    classes.addToBagButton
                }
                onClick={
                    () => {
                        let productId = data._id;
                        HandleAddToCart(productId)
                    }
            }>Add to bag</Button>
            <Button className={
                classes.wishListButton
            }>Wishlist</Button>
        </div>)
    }
    const AddedToBag = () => {
        return (<div className="buttonContainer">
            <Button className={
                classes.addedBagButton
            }>Added To Bag</Button>
        </div>)
    }
    const Wishlisted = () => {
        return (<div className="buttonContainer">
            <Button className={
                classes.wishlistedButton
            }>Wishlist</Button>
        </div>)
    }
    return (<div className="displayBook">
        <span className="topContent">
            <div className='book-title'>
                Books
                <font className="bookSize">
                    ({
                    books.length
                }
                    items )
                </font>
                {" "} </div>
            <div className='sort-options'>
                <FormControl variant="outlined"
                    className={
                        classes.formControl
                }>
                    <Select className={
                            classes.optionSelect
                        }
                        native
                        inputProps={
                            {name: "type"}
                        }
                        value={sort}
                        onChange={handleSort}>
                        <option value={"rel"}
                            style={
                                {fontSize: "11.5px"}
                        }>Sort by relevance</option>
                        <option value={"asc"}
                            style={
                                {fontSize: "11.5px"}
                        }>Price: low to high</option>
                        <option value={"desc"}
                            style={
                                {fontSize: "11.5px"}
                        }>Price: high to low</option>
                        <option value={"new"}
                            style={
                                {fontSize: "11.5px"}
                        }>Newest Arrival</option>
                    </Select>
                </FormControl>
            </div>
        </span>
        <div className="allBooks"> {
            currentBooks.map((data) => (<div className="bookContainer">
                <div className="imageContainer">
                    <img className="bookImage"
                        src={
                            data.image
                        }
                        alt=""/> {
                    data.quantity === 0 ? <div className='out-of-stock'>
                        OUT OF STOCK
                    </div> : ""
                } </div>
                <div className="infoContainer">
                    <Typography className={
                        classes.bookName
                    }> {
                        data.title
                    } </Typography>
                    <Typography className={
                        classes.bookAuthor
                    }> {
                        data.author
                    } </Typography>
                    <Typography className={
                        classes.bookPrize
                    }>
                        Rs. {
                        data.price
                    } </Typography>
                </div>
                {
                ((cart && (Object.keys(cart).length !== 0)) && (cart.items.some(obj => obj.productId === data._id))) ? <AddedToBag/>: (data.quantity === 0) ? <Wishlisted/>: <ButtonContainer data={data}/>
            }
                <div className="descClass">
                    <Typography className={
                        classes.bookName
                    }>Book Detail</Typography>
                    {
                    data.description
                } </div>
            </div>))
        } </div>
        <div className="pagination-box">
            <PaginationPage booksPerPage={booksPerPage}
                totalBooks={
                    books.length
                }
                paginate={paginate}
                currentPage={currentPage}/></div>
    </div>)
}
export default BookCard;
