import Home from '../components/Home'
import React, {useEffect, useState} from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import sucess from "../assets/sucess.png"
import {makeStyles} from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../styles/cart.scss"
const useStyles = makeStyles(theme => ({
    root: {

        paddingTop: theme.spacing(10)
    },
    font: {
        position: "absolute",
        top: "40%",
        textAlign: "center",
        color: "black",
        backgroundColor: "none",
        fontFamily: "Comic Sans MS"
    }
}));
const SuccessOrder = () => {
    let history = useHistory();
    const classes = useStyles();
    return (
        <React.Fragment>
            <Home/>
                <Stack direction="column" justifyContent="center" alignItems="center" className={
                    classes.root
            }
                    spacing={2}>
                    <img className="sucess-image"
                        src={sucess}
                        alt=""/>
                    <Typography variant='h6'
                        className={
                            classes.font
                        }
                        style={
                            {fontWeight: 'bold'}
                    }>Order Placed Successfully</Typography>

                    <div className='sucess-info'>
                        <Typography>hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</Typography>
                    </div>

                    <Button variant="contained"
                        onClick={
                            () => {
                                history.push("/dashboard")
                            }
                    }>
                        Continue Shopping
                    </Button>
                </Stack>

            
        </React.Fragment>
    )
}
export default SuccessOrder;
