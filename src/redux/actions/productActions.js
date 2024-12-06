import api from '../../utils/api';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST_REQUEST' }); 
    const response = await api.get('/products');
    dispatch({
      type: 'PRODUCT_LIST_SUCCESS',
      payload: response.data.products, 
    });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_LIST_FAIL',
      payload: error.response ? error.response.data.error : error.message,
    });
  }
};

export const getProductDetails = (productId) => async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCT_DETAILS_REQUEST' });
      const response = await api.get(`/products/${productId}`);
      dispatch({
        type: 'PRODUCT_DETAILS_SUCCESS',
        payload: response.data.product,
      });
    } catch (error) {
      dispatch({
        type: 'PRODUCT_DETAILS_FAIL',
        payload: error.response ? error.response.data.error : error.message,
      });
    }
  };
  export const getRelatedProducts = (productId) => async (dispatch) => {
    try {
      dispatch({ type: "RELATED_PRODUCTS_REQUEST" });
      const response = await api.get(`/products/related/${productId}`);
      dispatch({
        type: "RELATED_PRODUCTS_SUCCESS",
        payload: response.data.relatedProducts,
      });
    } catch (error) {
      dispatch({
        type: "RELATED_PRODUCTS_FAIL",
        payload: error.response ? error.response.data.error : error.message,
      });
    }
  };
  
