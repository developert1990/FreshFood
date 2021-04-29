import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL } from '../constants/signUpConstants';

export const signUpAction = (zipCode, email) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    if (!zipCode || !email) {
        dispatch({ type: SIGNUP_FAIL, payload: "You got an error" })
    } else {
        dispatch({ type: SIGNUP_SUCCESS, payload: { zipCode, email } });

    }
}