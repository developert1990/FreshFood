import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL } from '../constants/signUpConstant';

export const signUpAction = (zipCode, email) => (dispatch) => {
    dispatch({ type: SIGNUP_SUCCESS, payload: { zipCode, email } });
}