import {ActionTypes} from "../constants/action-types";
const intialState = {
    books: [],
    searchBooks: [],
    currentPage: 1,
    cartItems: {},
    orderId: ""
};


export const booksReducer = (state = intialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_BOOKS:
            return {
                ...state,
                books: payload
            };
        case ActionTypes.SELECTED_BOOK:
            return {
                ...state,
                searchBooks: payload
            };
        case ActionTypes.CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            }
        case ActionTypes.SET_CART:
            return {
                ...state,
                cartItems: payload
            };
        case ActionTypes.ADD_TO_CART:

            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    payload
                ]
            };
        case ActionTypes.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.productId !== payload)
            };
        case ActionTypes.ORDER_ID:
            return {
                ...state,
                orderId: payload
            };

        default:
            return state;
    }

};
