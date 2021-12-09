import {ActionTypes} from "../constants/action-types";
const intialState = {
    books: [],
   
};

export const booksReducer = (state = intialState, {type, payload}) => {
   
    switch (type) {
        case ActionTypes.SET_BOOKS:
           
            return {
                ...state,
                books: payload
            };
            default:
                return state;
        }

};
