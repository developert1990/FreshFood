import { ADD_TO_CART_SUCCESS } from '../constants/cartConstant'

export const addToCartAction = (item) => (dispatch, getState) => {
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: item });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartStore.cartItems))
}