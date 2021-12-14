import Home from '../components/Home'
import React from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import sucess from "../assets/sucess.png"
import {makeStyles} from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
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
            <Stack direction="column" justifyContent="center" alignItems="center"
                className={
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
                <div style={
                    {padding: "4px"}
                }></div>
                <div className='sucess-info'>
                    <Typography>hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</Typography>
                </div>
                <div style={
                    {padding: "4px"}
                }></div>

                <table>
                    <thead>
                        <tr>
                            <th scope="col">Email us</th>
                            <th scope="col">Contact us</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>admin@bookstore.com</td>
                            <td >+91 8163475881</td>
                            <td >42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                        </tr>
                    </tbody>
                </table>
                <div style={
                    {padding: "4px"}
                }></div>
                <Button variant="contained"

                    onClick={
                        () => {
                            history.push("/dashboard")
                        }
                }>
                    Continue Shopping
                </Button>
                <div style={
                    {padding: "4px"}
                }></div>
            </Stack>


        </React.Fragment>
    )
}
export default SuccessOrder;
