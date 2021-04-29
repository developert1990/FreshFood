import { GET_ALL_ITEMS_FAIL, GET_ALL_ITEMS_REQUEST, GET_ALL_ITEMS_SUCCESS } from '../constants/getAllItemConstant'
import items from '../../data/foodData.json';

export const getAllItemAction = () => async (dispatch) => {
    console.log("아이템추가페이지")
    dispatch({ type: GET_ALL_ITEMS_REQUEST });
    const promise = await new Promise((resolve, reject) => {
        resolve(items);
    });
    if (promise) {
        dispatch({ type: GET_ALL_ITEMS_SUCCESS, payload: promise });
    } else {
        dispatch({ type: GET_ALL_ITEMS_FAIL });
    }
}
