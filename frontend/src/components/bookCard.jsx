import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/books.css"
const useStyles = makeStyles((theme) => ({
    bookName: {
      fontSize: "13px",
      fontWeight: "bold",
    },
    bookAuthor: {
      fontSize: "12px",
    },
    bookQuantity: {
      fontSize: "12px",
    },
    bookPrize: {
      fontSize: "13px",
      fontWeight: "bold",
    },
    addToBagButton: {
      padding: "3px 4px 3px 4px",
      margin: "5px",
      width: "85px",
      fontSize: "11px",
      backgroundColor: "#A03037",
      color: "#ffff",
      borderRadius: "2px",
    },
    addedBagButton: {
      backgroundColor: "#1976D2",
      width: "170px",
      margin: "5px",
      color: "#ffff",
      borderRadius: "2px",
      fontSize: "11px",
    },
    wishListButton: {
      padding: "3px 4px 3px 4px",
      margin: "5px",
      width: "80px",
      fontSize: "13px",
      borderRadius: "2px",
      fontWeight: "bold",
    },
  
    optionSelect: {
      padding: "5px 5px",
    },
  }));
const BookCard = () => {
    const classes = useStyles();
    const books = useSelector((state) => state.allBooks.books);
    console.log(books)
    return (
        <div className="displayBook">
            <span className="topContent">
                <div>
                    Books
                    <font className="bookSize">
                        ({
                        books.length
                    }
                        items)
                    </font>
                    {" "} </div>
            </span>
            <div className="allBooks">
        {books.map((data) => (
          <div className="bookContainer">
            <div className="imageContainer">
              <img className="bookImage" src={data.image} alt="" />
            </div>
            <div className="infoContainer">
              <Typography className={classes.bookName}>
                {data.title}
              </Typography>
              <Typography className={classes.bookAuthor}>
                {data.author}
              </Typography>
             
              <Typography className={classes.bookPrize}>
                Rs. {data.price}
              </Typography>
            </div>
        </div>))}
        </div></div>
    )
}
export default BookCard;
