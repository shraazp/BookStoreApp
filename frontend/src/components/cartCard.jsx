import React,{useState} from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {IconButton,Button} from "@material-ui/core";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {setCart} from '../actions/booksActions';
import {useDispatch} from "react-redux";
import {Delete, create} from "../service/cartOp";
import CustomerAddress from "../components/customerAddress"
import Order from '../components/order';
import "../styles/cart.scss"
const CartCard = ({cart}) => {
  const [showCustomer,setShowCustomer]=useState(false);
  const [showOrder,setShowOrder]=useState(false);
  const [showCheckout,setShowCheckout]=useState(true);
  const [orders,setOrder]=useState([])
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
      setShowCheckout(false)
      setShowCustomer(true)
  }
    return(
        <React.Fragment>
        <Paper variant="outlined" sx={{ m: { xs: 1, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
       <Typography  gutterBottom   style={{fontWeight:"bold",fontSize:"18px",paddingBottom:"4%"}}>
                My Cart ({cart.items.length} items)
       </Typography>
       
       <Grid container
            spacing={1} >
       {cart.items.map((data) =>(
            <Grid container
            spacing={1} >
                <Grid item xs={4} >
                    <img
                        className="cartImage"
                        src={data.image}
                        alt=""  
                    />
  </Grid>
   <Grid item xs={8}>
   <div style={{ marginLeft: "10px" }}>
     <Typography align="left"  style={{fontWeight: "bold", fontSize: "14px" }}>{data.name}</Typography>
     <Typography
       align="left"
       color="text.secondary"
       style={{ fontSize: "14px" }}
     >
       by {data.author}
     </Typography>
     <Typography
       align="left"
       style={{ fontWeight: "bold", fontSize: "14px" }}
     >
       Rs {data.price}
     </Typography>
     <IconButton onClick={
                            () => {
                                handleQuantity(data.productId, -1)
                            }
                        } >
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <input className="data-quantity" type="number" min="1" max="5"
                            value={
                                data.quantity
                            }
                            name="quantity"/>
                        <IconButton onClick={
                            () => {
                                handleQuantity(data.productId, 1)
                            }
                        }
                        >
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        <Button variant="text"
                            onClick={
                                () => {
                                    handleRemove(data.productId)
                                }
                        }>Remove</Button>
   </div></Grid>
   
   </Grid>
   
   )
       )}</Grid>
      {showCheckout? <Grid item xs={12}  align="right">
              <Button
                    variant="contained"
                    style={{backgroundColor:"#1976d2",color:"white",padding: "6px 16px",width: "151px",height: "35px",marginRight:"2%"}}
                    onClick={()=>{placeOrder()}}>
                  Place Order
                  </Button></Grid>:""} 
       </Paper>
       <CustomerAddress showCustomer={showCustomer} setShowOrder={setShowOrder} setOrder={setOrder}/>
    <Order showOrder={showOrder} orders={orders}/>
       </React.Fragment>
    )
}
export default CartCard