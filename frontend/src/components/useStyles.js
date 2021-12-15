import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    bookName: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "13px",
        fontWeight: "bold"
    },
    bookAuthor: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "12px"
    },
    bookQuantity: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "12px"
    },
    bookPrize: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "13px",
        fontWeight: "bold"
    },
    addToBagButton: {
        padding: "3px 4px 3px 4px",
        margin: "5px",
        width: "85px",
        fontSize: "11px",
        backgroundColor: "#A03037",
        color: "#ffff",
        borderRadius: "2px"
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
        border: "1px solid #9D9D9D"
    },

    optionSelect: {
        padding: "5px 5px",
        height: "30px"
    },
    container: {
        paddingTop: theme.spacing(10)
    }

}));

export default useStyles;
