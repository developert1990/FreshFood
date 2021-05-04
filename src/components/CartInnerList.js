import React from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LocalMallTwoToneIcon from '@material-ui/icons/LocalMallTwoTone';

export const CartInnerList = ({ cartItems, addToCartAPI, deleteCartItemAPI }) => {
    let totalPrice = 0;
    const handleIncrease = ({ id, image, price, qty, title }) => {
        addToCartAPI({ id, image, title, price, qty: qty + 1 })
    }

    const handleDecrease = ({ id, image, price, qty, title }) => {
        addToCartAPI({ id, image, title, price, qty: qty - 1 })
    }

    const handleDelete = ({ id }) => {
        deleteCartItemAPI({ id });
    }
    const isCartEmpty = cartItems.length === 0;
    return (
        <div className="cartList">
            <div className="cartTop">
                <h1 className="cartTitle">Your Cart</h1>
                <LocalMallTwoToneIcon />
            </div>
            <div className="tableWrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.length === 0 ?
                                <div className="emptyCart">
                                    <span>Empty..</span>
                                    <div className="cartLogo"></div>
                                </div>
                                : cartItems.map((item, index) => {
                                    const { id, image, price, qty, title } = item;
                                    totalPrice += price * qty;
                                    return (
                                        <tr className="cartItem" key={index}>
                                            <td>
                                                <img className="img" src={image} alt="foodImg" />
                                                <div className="orderItemName" >{title}</div>
                                            </td>
                                            <td className="orderItemCount">
                                                <IconButton aria-label="add" color="secondary" disabled={qty === 1 ? true : false} onClick={() => handleDecrease({ id, image, price, qty, title })}>
                                                    <RemoveCircleIcon fontSize="small" />
                                                </IconButton>
                                                <span>{qty}</span>
                                                <IconButton aria-label="add" color="primary" onClick={() => handleIncrease({ id, image, price, qty, title })}>
                                                    <AddCircleIcon fontSize="small" />
                                                </IconButton>
                                            </td>
                                            <td>${(price * qty).toFixed(2)}</td>
                                            <td>
                                                <IconButton aria-label="delete" className="deleteBtn" onClick={() => handleDelete({ id })}>
                                                    <RiDeleteBin7Line className="deleteBtn" />
                                                </IconButton>
                                            </td>
                                        </tr>
                                    )
                                })}
                    </tbody>
                </table>
            </div>
            <div className="cartBottom">
                <div className="orderAndLogo">
                    <Button disabled={isCartEmpty} className="addBtn" size="large">
                        Place Order
                    </Button>
                    <div className={`${isCartEmpty ? "noBike" : "bikeLogo2"}`}></div>
                </div>
                <div className="cartTotalPrice">${totalPrice.toFixed(2)}</div>
            </div>
        </div>
    )
}
