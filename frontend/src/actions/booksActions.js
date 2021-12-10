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