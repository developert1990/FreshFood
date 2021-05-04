import React, { useEffect } from 'react';
import { Cart } from '../components/Cart';
import { ItemCard } from '../components/ItemCard';
import Zoom from 'react-reveal/Zoom';

export const AddItems = ({ fetchAllAPI, isLoading, foods, error, addToCartAPI, cartItems, deleteCartItemAPI }) => {

    useEffect(() => {
        fetchAllAPI();
    }, [])
    return (
        <div className="addItems">
            <h1 className="addItemsTitle">Fresh-Meals to Your Door</h1>
            <div className="addItemsContents">
                <Zoom>
                    <ItemCard foods={foods} addToCartAPI={addToCartAPI} cartItems={cartItems} />
                </Zoom>
                <Cart cartItems={cartItems} addToCartAPI={addToCartAPI} deleteCartItemAPI={deleteCartItemAPI} />
            </div>
        </div>
    )
}
