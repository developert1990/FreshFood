import React from 'react'
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { IconButton } from '@material-ui/core';
import { useStyles } from '../config/materialUIStyle';
import Button from '@material-ui/core/Button';

export const CartList = ({ anchor, toggleDrawer, cartItems, addToCartAPI, deleteCartItemAPI }) => {
    let totalPrice = 0;
    const classes = useStyles();
    const handleIncrease = ({ id, image, price, qty, title }) => {
        addToCartAPI({ id, image, title, price, qty: qty + 1 })
    }

    const handleDecrease = ({ id, image, price, qty, title }) => {
        addToCartAPI({ id, image, title, price, qty: qty - 1 })
    }

    const handleDelete = ({ id }) => {
        deleteCartItemAPI({ id });
    }

    return (
        <div
            id="Cart"
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <h1 className="cartTitle">Your Cart</h1>
                {
                    cartItems.length > 0 && cartItems.map((item, index) => {
                        const { id, image, price, qty, title } = item;
                        totalPrice += parseInt(price * qty);
                        return (
                            <ListItem key={index}>
                                <div className="cartItem">
                                    <img className="img" src={image} alt="foodImg" style={{ width: 70 }} />
                                    <div className="orderItemDetail">
                                        <div className="orderItemName" style={{ fontSize: "15px" }}>{title}</div>
                                        <div className="orderItemCount">
                                            <Button disabled={qty === 1 ? true : false} onClick={() => handleDecrease({ id, image, price, qty, title })}>-</Button>{qty}
                                            <Button onClick={() => handleIncrease({ id, image, price, qty, title })}>+</Button>
                                        </div>
                                    </div>
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => handleDelete({ id })}>
                                        <RiDeleteBin7Line className="deleteBtn">삭제 버튼</RiDeleteBin7Line>
                                    </IconButton>
                                </div>
                            </ListItem>
                        )
                    })}
                <div className="cartTotalPrice">Price: {totalPrice}</div>
            </List>
        </div>
    )
}


