import { GET_ALL_ITEMS_FAIL_MESSAGE } from '../../constants';
import { GET_ALL_ITEMS_FAIL, GET_ALL_ITEMS_REQUEST, GET_ALL_ITEMS_SUCCESS } from '../constants/getAllItemConstant';

export const getAllItemInitialState = {
    isLoading: false,
    foods: [],
    error: "",
}

export const getAllItemReducer = (state = getAllItemInitialState, action) => {
    switch (action.type) {
        case GET_ALL_ITEMS_REQUEST:
            return { ...state, isLoading: true }
        case GET_ALL_ITEMS_SUCCESS:
            return { ...state, isLoading: false, foods: action.payload };
        case GET_ALL_ITEMS_FAIL:
            return { ...state, isLoading: false, error: GET_ALL_ITEMS_FAIL_MESSAGE };
        default:
            return state;
    }
}