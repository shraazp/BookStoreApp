import React from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {emptyCart} from '../service/cartOp'
import { setCart } from "../actions/booksActions";
import {useDispatch} from "react-redux";
import { setOrderID } from "../actions/booksActions";
import {useHistory} from "react-router-dom";
const Order=({showOrder,orders})=>{
  let history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit=()=>{
        emptyCart().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
       dispatch(setCart({})) 
       dispatch(setOrderID(orders._id))
     history.push('/success');
    }
    return(
        <React.Fragment>
         <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
        <Typography gutterBottom   style={{fontWeight:"bold",fontSize:"18px"}} >
            Order Summary
        </Typography>
        {(showOrder && orders.length!==0)?(
           <Grid container
           spacing={1}>
               {
           orders.items.map((data) => (
               <Grid container
           spacing={1} style={{paddingTop:"4%"}}>
               <Grid item  xs={4} sx={{ py: { xs: 2, md: 3 }}}>
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
              </div></Grid></Grid>
           )
           )}
               <Grid item xs={4} align="left">
                   <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                       Total Bill is Rs.{orders.bill}
                   </Typography>
               </Grid>
           <Grid item xs={8}  align="right">
             <Button
                   variant="contained"
                   style={{backgroundColor:"#1976d2",color:"white",padding: "6px 16px",width: "151px",height: "35px",marginRight:"2%"}}
                   onClick={(e)=>{handleSubmit()}}
                 >
               Checkout
                 </Button></Grid>
           </Grid>
        ):""}
      
        </Paper>
        </React.Fragment>
    )
}
export default Order