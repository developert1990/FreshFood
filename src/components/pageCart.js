import React from 'react';
import { CartInnerList } from './CartInnerList';

export const PageCart = ({ cartItems, addToCartAPI, deleteCartItemAPI }) => {
    return (
        <div className="PageCart">
            <CartInnerList cartItems={cartItems} addToCartAPI={addToCartAPI} deleteCartItemAPI={deleteCartItemAPI} />
        </div>
    )
}
