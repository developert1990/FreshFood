import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import { getNutrition } from '../../libs/getNutrition';
import { Nutrition } from '../Nutrition';
import { checkVitaminInCart } from '../../libs/checkVitaminInCart';
import { AddItemCtrolBtn } from '../AddItemCtrolBtn';
import { VitaminSelection } from '../VitaminSelection';

export const ItemCard = ({ foods, addToCartAPI, cartItems }) => {
    const [vitamin, setVitamin] = useState({
        vitaminData: '',
        image: '',
    });

    return (
        <div className="ItemCard">{
            foods.map((food, index) => {
                const filteredFood = cartItems.filter((data) => data.id === food.id);
                const filteredVitamin = food.title === "Vitamin A" && checkVitaminInCart(vitamin.vitaminData, cartItems);
                const isActive = food.title === "Vitamin A" && (vitamin.vitaminData === "" || filteredVitamin) ? true : false;
                const nutritionArr = getNutrition(food.body_html);
                return (
                    <div className="singleItem fourth" title="Suspendisse potenti" key={food.id}>
                        <div className="itemImg">
                            <Card.Img
                                height="100%"
                                className="products__image"
                                src={`${food.image}`}
                                variant="top"
                            />
                        </div>
                        <div className="itemContent">
                            <span className="itemLabel">{food.title === "Vitamin A" ? "Vitamin" : "Meal"}</span>
                            <div className="itemContentDetail">
                                <div className="nameAndNutrition">
                                    <div className="foodName">
                                        {food.title}
                                    </div>
                                    <hr className="greyLine" />
                                    <Nutrition nutritionArr={nutritionArr} />
                                </div>
                                <hr className="greyLine" />
                                <AddItemCtrolBtn filteredFood={filteredFood} isActive={isActive} addToCartAPI={addToCartAPI} food={food} vitamin={vitamin} foods={foods} />
                                <VitaminSelection food={food} index={index} vitamin={vitamin} setVitamin={setVitamin} />
                            </div>
                        </div>
                    </div>
                )
            })
        }

        </div>
    )
}












