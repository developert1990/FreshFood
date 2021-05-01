import { GET_ALL_ITEMS_FAIL, GET_ALL_ITEMS_REQUEST, GET_ALL_ITEMS_SUCCESS } from '../constants/getAllItemConstant'
import items from '../../data/foodData.json';

export const getAllItemAction = () => async (dispatch) => {
    dispatch({ type: GET_ALL_ITEMS_REQUEST });
    const promise = await new Promise((resolve, reject) => {
        resolve(items);
    });
    const products = promise.products;
    const newArr = [];
    console.log(`products: `, products)
    products.map((data) => {
        const obj = { id: data.id, title: data.title, body_html: data.body_html, variants: data.variants, image: data.image.src };
        newArr.push(obj);
    })
    console.log(`newArr: `, newArr)
    if (promise) {
        dispatch({ type: GET_ALL_ITEMS_SUCCESS, payload: newArr });
    } else {
        dispatch({ type: GET_ALL_ITEMS_FAIL });
    }
}
