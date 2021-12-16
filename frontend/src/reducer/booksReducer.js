import {ActionTypes} from "../constants/action-types";
const intialState = {
    books: [],
    searchBooks: [],
    currentPage: 1,
    cartItems: {},
    orderId: ""
};

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) {
            return -1;
        }
        if (b[field] > a[field]) {
            return 1;
        }
        return 0;
    })
}
function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) {
            return 1;
        }
        if (b[field] > a[field]) {
            return -1;
        }
        return 0;
    })
}
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
        case ActionTypes.SORT_BY_PRICE:
            let sortedArr
            switch (payload) {
                case "asc": sortedArr = sortAsc(state.searchBooks, 'price');
                    break;
                case "desc": sortedArr = sortDesc(state.searchBooks, 'price');
                    break;
                default: sortedArr = state.books;
                    break
            }
            return {
                ...state,
                searchBooks: sortedArr
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
