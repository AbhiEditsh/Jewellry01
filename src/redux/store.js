// src/redux/store.js
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import {
  productDetailsReducer,
  productListReducer,
  relatedProductsReducer,
  productsByCategoryReducer,
  inquiryReducer,
} from "./reducers/productReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  relatedProducts: relatedProductsReducer,
  productsByCategory: productsByCategoryReducer,
  inquiry: inquiryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
