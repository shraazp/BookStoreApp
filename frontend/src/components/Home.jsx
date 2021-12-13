
import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {selectedBook,setCurrentPage} from '../actions/booksActions';
import Logo from "../assets/education.png";
// import IconButton from '@material-ui/core/IconButton';
import InputBase from "@material-ui/core/InputBase";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
// import Button from '@material-ui/core/Button';
import "../styles/HomePage.css";
export default function Home({setShowCart}) {
  const [search, setSearch] = useState("");
  const books = useSelector((state) => state.allBooks.books);
  const dispatch = useDispatch();
  const handleSearch = (searchValue) => {
      setSearch(searchValue);
      dispatch(setCurrentPage(1))
  };
  useEffect(() => {
      dispatch(selectedBook(books.filter((item) => {
          return(item.title.toLowerCase().includes(search.toLowerCase()) || (item.author.toLowerCase().includes(search.toLowerCase())));
      })))
      // eslint-disable-next-line
  }, [search, books]);
  return (
    <div className="mainDiv">
      <div className="topnav">
        <div className="block">
          <div >
            <img src={Logo} alt="FundooImg" />
            <div className="title" onClick={()=>{setShowCart(false)}}>BookStore</div>
            <InputBase name="Search" placeholder="Search" className="input"  onChange={
                                (e) => handleSearch(e.target.value)
                            } />
          </div>
          <div className="rightIcons">
            <IconButton onClick={()=>{setShowCart(true)}}>
            <div>
            <ShoppingCartOutlinedIcon />
            </div> </IconButton>
            <div>
           Cart
            </div>
           
          </div>
        
        </div>
      </div>

      
      {/* <div className="menubar">
        <div className="Menublock">
          <div >
           Books
          </div>
          <div className="rightIconsmenu">
            <div>
           Sort Items
           </div>
          </div>
        
        </div>
      </div> */}
      <div className="menubar">
        <div className="Menublock">
        
       
        
        </div>
      </div>
   
    </div>
  );
}