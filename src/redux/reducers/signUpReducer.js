import { SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../constants/signUpConstants';

export const signUpInitialState = {
    isLoading: false,
    error: "",
    userData: undefined,
}

export const signUpReducer = (state = signUpInitialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, isLoading: true };
        case SIGNUP_SUCCESS:
            return { ...state, isLoading: false, userData: action.payload };
        case SIGNUP_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
}