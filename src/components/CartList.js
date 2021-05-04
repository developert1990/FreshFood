import React from 'react'
import clsx from 'clsx';
import { useStyles } from '../config/materialUIStyle';
import { CartInnerList } from './CartInnerList';

export const CartList = ({ anchor, toggleDrawer, cartItems, addToCartAPI, deleteCartItemAPI }) => {
    const classes = useStyles();
    return (
        <div
            id="Cart"
            className={clsx(classes.list)}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <CartInnerList cartItems={cartItems} addToCartAPI={addToCartAPI} deleteCartItemAPI={deleteCartItemAPI} />
        </div>
    )
}
