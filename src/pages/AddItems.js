import React, { useEffect } from 'react';
import { ItemCard } from '../components/ItemCard';
import Zoom from 'react-reveal/Zoom';
import { PageCart } from '../components/pageCart';

export const AddItems = ({ fetchAllAPI, isLoading, foods, error, addToCartAPI, cartItems, deleteCartItemAPI }) => {

    useEffect(() => {
        fetchAllAPI();
    }, [])
    return (
        <div className="addItems">
            <Zoom>
                <div className="addItemsInner">
                    <div className="addItemsLeft">
                        <PageCart cartItems={cartItems} addToCartAPI={addToCartAPI} deleteCartItemAPI={deleteCartItemAPI} />
                    </div>
                    <div className="addItemsRight">
                        <h1 className="addItemsTitle">Fresh-Meals to Your Door</h1>
                        <ItemCard foods={foods} addToCartAPI={addToCartAPI} cartItems={cartItems} />

                    </div>
                    <div className="addItemsBlank"></div>
                </div>
            </Zoom>
        </div>
    )
}
