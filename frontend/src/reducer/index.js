import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
const reducers = combineReducers({
  allBooks: booksReducer,
  
});
export default reducers;