import React, { useEffect } from 'react';
import { Cart } from './Cart';
import { ItemCard } from './ItemCard';

export const AddItems = ({ fetchAllAPI, isLoading, foods, error, addToCartAPI, cartItems, deleteCartItemAPI }) => {

    useEffect(() => {
        fetchAllAPI();
    }, [])
    return (
        <div className="addItems">
            <ItemCard foods={foods} addToCartAPI={addToCartAPI} />
            <Cart cartItems={cartItems} addToCartAPI={addToCartAPI} deleteCartItemAPI={deleteCartItemAPI} />
        </div>
    )
}
