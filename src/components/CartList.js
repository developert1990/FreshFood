import React from 'react'
import clsx from 'clsx';
import { useStyles } from '../config/materialUIStyle';
import { CartInnerList } from './CartInnerList';
import CloseIcon from '@material-ui/icons/Close';

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

            <CloseIcon className="closeCart" onClick={toggleDrawer("right", false)} />
        </div>
    )
}
