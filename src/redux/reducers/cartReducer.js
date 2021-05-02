import { ADD_TO_CART_SUCCESS, DELETE_ALL_ITEMS, DELETE_CART_ITEM } from '../constants/cartConstant';

export const cartInitialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
}

export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_SUCCESS:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if (existItem) {
                return { ...state, cartItems: state.cartItems.map((x) => x.id === existItem.id ? item : x) }

            } else {
                return { ...state, cartItems: [...state.cartItems, item] }
            }
        case DELETE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.id !== action.payload)
            }
        case DELETE_ALL_ITEMS:
            return { cartItems: [] }
        default:
            return { ...state };
    }
}