import { SIGNUP_SUCCESS } from '../constants/signUpConstant';

export const signUpAction = (zipCode, email) => (dispatch) => {
    dispatch({ type: SIGNUP_SUCCESS, payload: { zipCode, email } });
}