import { splitVitaminData } from './splitVitaminData'

export const checkVitaminInCart = (vitaminData, cartItems) => {
    const { id } = splitVitaminData(vitaminData);
    const numId = parseInt(id);
    const hasVitamin = cartItems.filter((data) => data.id === numId).length > 0;
    console.log(`hasVitamin`, hasVitamin);
    return hasVitamin;
}