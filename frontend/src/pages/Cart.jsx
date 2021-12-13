import React from "react";
import {Container, Typography, IconButton, Button} from "@material-ui/core";
import "../styles/cart.scss"
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import useStyles from '../components/useStyles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const Cart = ({cart}) => {
    const classes = useStyles();
    return (
        <Container className={
            classes.container
        }>
            <Card sx={
                {minWidth: 275}
            }>
                <span className="topContent">
                    <div>
                        My Cart
                        <font className="bookSize">
                            ({
                            cart.items.length
                        }
                            items)
                        </font>
                        {" "} </div>
                </span>
                {
                cart.items.map((data) => (
                    <Grid container
                        spacing={2}>
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
                                }>
                                    {
                                    data.name
                                } </Typography>
                                <Typography className={
                                    classes.bookAuthor
                                }>
                                    {
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
                                <IconButton>
                                    <RemoveCircleOutlineIcon/>
                                </IconButton>
                                <input type="number" min="1" max="100"
                                    value={
                                        data.quantity
                                    }
                                    name="quantity"/>
                                <IconButton>
                                    <AddCircleOutlineIcon/>
                                </IconButton>
                                <Button variant="text">Remove</Button>
                            </div>
                        </Grid>
                    </Grid>
                ))
            }
                <Button variant="contained" color="primary" style={{align:"right"}}>
                   Place Order
                </Button>
            </Card>
        </Container>

    )
}
export default Cart;
