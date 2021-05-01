import { DELETE_CART_ITEM } from '../constants/cartConstant'

export const deleteCartItemAction = ({ id }) => (dispatch, getState) => {
    dispatch({ type: DELETE_CART_ITEM, payload: id });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartStore.cartItems));
}