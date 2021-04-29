import { useDispatch, useSelector } from 'react-redux';
import { INVALID_EMAIL_MESSAGE } from '../constants';
import { signUpAction } from '../redux/actions/signUpAction';
import { SIGNUP_FAIL } from '../redux/constants/signUpConstants';

export const useSignUp = () => {
    const signUpStore = useSelector((state) => state.signUpStore);
    const dispatch = useDispatch();
    const { error } = signUpStore;
    const signUpFailAPI = () => dispatch({ type: SIGNUP_FAIL, payload: INVALID_EMAIL_MESSAGE })
    const signUpAPI = (zipCode, email) => dispatch(signUpAction(zipCode, email));
    return { signUpAPI, signUpFailAPI, error }
};