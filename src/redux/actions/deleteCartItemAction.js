import { DELETE_ALL_ITEMS, DELETE_CART_ITEM } from '../constants/cartConstant'

export const deleteCartItemAction = ({ id }) => (dispatch, getState) => {
    dispatch({ type: DELETE_CART_ITEM, payload: id });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartStore.cartItems));
}

export const deleteAllCartItemAction = () => (dispatch) => {
    dispatch({ type: DELETE_ALL_ITEMS });
}