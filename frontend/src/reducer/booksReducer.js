import {ActionTypes} from "../constants/action-types";
const intialState = {
    books: [],
    searchBooks: []
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
        default:
            return state;
    }

};
