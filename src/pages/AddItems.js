import React, { useEffect } from 'react';
import { ItemCard } from '../components/ItemCard/index';
import Zoom from 'react-reveal/Zoom';
import { PageCart } from '../components/CartInPage';
import { useDispatch } from 'react-redux';
import { getAllItemAction } from '../redux/actions/getAllItemAction';

export const AddItems = ({ isLoading, foods, error }) => {

    const dispatch = useDispatch();
    const fetchAllAPI = () => dispatch(getAllItemAction());
    useEffect(() => {
        fetchAllAPI();
    }, []);

    return (
        <div className="addItems">
            <Zoom>
                <div className="addItemsInner">
                    <div className="addItemsLeft">
                        <PageCart />
                    </div>
                    <div className="addItemsRight">
                        <h1 className="addItemsTitle">Fresh-Meals to Your Door</h1>
                        <ItemCard foods={foods} />

                    </div>
                </div>
            </Zoom>
        </div>
    )
}
