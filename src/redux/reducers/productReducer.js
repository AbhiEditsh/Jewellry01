// src/redux/reducers/productReducer.js

// Initial state for product list
const productListInitialState = {
  products: [],
  loading: false,
  error: null,
};

// Reducer for product list
export const productListReducer = (state = productListInitialState, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { ...state, loading: true };
    case "PRODUCT_LIST_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "PRODUCT_LIST_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Initial state for product details
const productDetailsInitialState = {
  loading: false,
  product: null,
  error: null,
};

// Reducer for single product details
export const productDetailsReducer = (
  state = productDetailsInitialState,
  action
) => {
  switch (action.type) {
    case "PRODUCT_DETAILS_REQUEST":
      return { ...state, loading: true };
    case "PRODUCT_DETAILS_SUCCESS":
      return { ...state, loading: false, product: action.payload };
    case "PRODUCT_DETAILS_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

//Reducrer for Relelted Product
const relatedProductsInitialState = {
  loading: false,
  products: [],
  error: null,
};

export const relatedProductsReducer = (
  state = relatedProductsInitialState,
  action
) => {
  switch (action.type) {
    case "RELATED_PRODUCTS_REQUEST":
      return { ...state, loading: true };
    case "RELATED_PRODUCTS_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "RELATED_PRODUCTS_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const productsByCategoryInitialState = {
  loading: false,
  products: [],
  error: null,
};

export const productsByCategoryReducer = (
  state = productsByCategoryInitialState,
  action
) => {
  switch (action.type) {
    case "PRODUCTS_BY_CATEGORY_REQUEST":
      return { ...state, loading: true };
    case "PRODUCTS_BY_CATEGORY_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "PRODUCTS_BY_CATEGORY_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const inquiryInitialState = {
  loading: false,
  success: false,
  error: null,
};

export const inquiryReducer = (state = inquiryInitialState, action) => {
  switch (action.type) {
    case "INQUIRY_REQUEST":
      return { ...state, loading: true, success: action.payload };
    case "INQUIRY_SUCCESS":
      return { loading: false, success: true, data: action.payload };
    case "INQUIRY_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const reviewListInitialState = {
  review: [],
  loading: false,
  error: null,
};

export const ReviewListReducer = (state = reviewListInitialState, action) => {
  switch (action.type) {
    case "REVIEW_LIST_REQUEST":
      return { ...state, loading: true };
    case "REVIEW_LIST_SUCCESS":
      return { ...state, loading: false, review: action.payload };
    case "REVIEW_LIST_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


// ProductInquiry Reducer
const ProductinquiryInitialState = {
  loading: false,
  success: false,
  error: null,
};

export const ProductinquiryReducer = (state = ProductinquiryInitialState, action) => {
  switch (action.type) {
    case "PRODUCT_INQUIRY_REQUEST":
      return { ...state, loading: true, success: action.payload };
    case "PRODUCT_INQUIRY_SUCCESS":
      return { loading: false, success: true, data: action.payload };
    case "PRODUCT_INQUIRY_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};