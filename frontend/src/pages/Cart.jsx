import React ,{useState} from "react";
import { Typography, IconButton, Button,Paper} from "@material-ui/core";
import "../styles/cart.scss"
import Grid from '@mui/material/Grid';
import useStyles from '../components/useStyles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {setCart} from '../actions/booksActions';
import {useDispatch} from "react-redux";
import {Delete, create} from "../service/cartOp";
import CustomerAddress from "../components/customerAddress"
import Order from '../components/order'
const Cart = ({cart}) => {
    const classes = useStyles();
    const [showCustomer,setShowCustomer]=useState(false);
    const dispatch = useDispatch();
    const handleQuantity = (productId, quantity) => {
        const data = {
            "productId": productId,
            "quantity": quantity
        }
        create(data).then((res) => {
            dispatch(setCart(res.data))
        }).catch((err) => console.log(err.message))
    }
    const handleRemove = (productId) => {
        Delete(productId).then((res) => {
            dispatch(setCart(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
    const placeOrder = () => {
        setShowCustomer(true)
    }
    return ( 
        <React.Fragment>
   <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
    <Typography variant="h6" gutterBottom>
    My Cart ({
                        cart.items.length
                    }
                        items)
        </Typography>
           
            {
            cart.items.map((data) => (<Grid container
                spacing={3}>
                <Grid item
                    xs={4}
                    sx={
                        {p: 2}
                }>
                    <img className="bookImage"
                        src={
                            data.image
                        }
                        alt=""/>
                </Grid>
                <Grid item
                    xs={8}>
                    <div className="infoContainer">
                        <Typography className={
                            classes.bookName
                        }> {
                            data.name
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
                    <div class="quantity-operations">
                        <IconButton onClick={
                            () => {
                                handleQuantity(data.productId, -1)
                            }
                        }>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <input type="number" min="1" max="100"
                            value={
                                data.quantity
                            }
                            name="quantity"/>
                        <IconButton onClick={
                            () => {
                                handleQuantity(data.productId, 1)
                            }
                        }>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        <Button variant="text"
                            onClick={
                                () => {
                                    handleRemove(data.productId)
                                }
                        }>Remove</Button>
                    </div>
                </Grid>
            </Grid>))
        }
            <Button variant="contained" color="primary"
                style={
                    {align: "right"}
            } onClick={()=>{placeOrder()}}>
                Place Order
            </Button>
       
       
    </Paper>
    <CustomerAddress showCustomer={showCustomer}/>
    <Order/>
    </React.Fragment>
    )
}
export default Cart;
