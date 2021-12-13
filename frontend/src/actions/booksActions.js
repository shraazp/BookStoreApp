import { ActionTypes } from "../constants/action-types";

export const setBooks = (books) => {
  return {
    type: ActionTypes.SET_BOOKS,
    payload:books,
  };
};
export const selectedBook = (books) => {
  return {
    type: ActionTypes.SELECTED_BOOK,
    payload: books,
  };
};
export const sortByPrice = (payload) => ({
  type: ActionTypes.SORT_BY_PRICE,
  payload
});
export const setCurrentPage=(payload)=>({
  type: ActionTypes.CURRENT_PAGE,
  payload
})

export const setCart = (books) => {
  return {
    type: ActionTypes.SET_CART,
    payload: books,
  };
};

export const addToCart = (books) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: books
  };
};

export const deleteCart = (bookId) => {
  return {
    type: ActionTypes.DELETE_FROM_CART,
    payload: bookId
  }
};