import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import { splitVitaminData } from '../libs/splitVitaminData';

export const AddItemCtrolBtn = ({ filteredFood, isActive, addToCartAPI, food, vitamin, foods }) => {

    const handleClick = (food) => {
        const qty = 1;
        if (food.title !== "Vitamin A") {
            const { id, image, title, variants } = food;
            const { price } = variants[0];
            addToCartAPI({ id, image, title, price, qty });
        } else {
            const { vitaminData } = vitamin;
            const { id, title, price } = splitVitaminData(vitaminData);
            if (id === "") {
                return alert('Please choose one vitamin');
            }
            const image = foods[foods.length - 1].image;
            addToCartAPI({ id: parseInt(id), image, title, price, qty });
        }
    }


    return (
        <>
            {
                filteredFood.length === 0 ?
                    <Button className="addBtn" disabled={isActive} size="large" variant="outlined" onClick={() => handleClick(food)}>
                        Add to Cart
                    </Button>
                    :
                    <Button className="addBtn" disabled size="large" variant="outlined" color="primary" onClick={() => handleClick(food)}>
                        <DoneIcon />
                    </Button>

            }
        </>
    )
}
