import { SIGNUP_FAIL_EMAIL, SIGNUP_FAIL_ZIPCODE, SIGNUP_RESET, SIGNUP_SUCCESS } from '../constants/signUpConstant';

export const signUpInitialState = {
    emailError: "",
    zipCodeError: "",
    userData: undefined,
}

export const signUpReducer = (state = signUpInitialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return { ...state, userData: action.payload };
        case SIGNUP_FAIL_EMAIL:
            return { ...state, emailError: action.payload };
        case SIGNUP_FAIL_ZIPCODE:
            return { ...state, zipCodeError: action.payload };
        case SIGNUP_RESET:
            return { ...state, zipCodeError: "", emailError: "" };
        default:
            return state;
    }
}