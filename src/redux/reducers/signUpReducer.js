import { SIGNUP_FAIL, SIGNUP_RESET, SIGNUP_SUCCESS } from '../constants/signUpConstant';

export const signUpInitialState = {
    error: "",
    userData: undefined,
}

export const signUpReducer = (state = signUpInitialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return { ...state, userData: action.payload };
        case SIGNUP_FAIL:
            return { ...state, error: action.payload };
        case SIGNUP_RESET:
            return { ...state, error: "" };
        default:
            return state;
    }
}