import { useDispatch, useSelector } from 'react-redux';
import { INVALID_EMAIL_MESSAGE, INVALID_ZIPCODE_MESSAGE } from '../constants';
import { signUpAction } from '../redux/actions/signUpAction';
import { stepAction } from '../redux/actions/stepAction';
import { SIGNUP_FAIL_EMAIL, SIGNUP_FAIL_ZIPCODE, SIGNUP_RESET } from '../redux/constants/signUpConstant';
import { deleteAllCartItemAction } from '../redux/actions/deleteCartItemAction';

export const useSignUp = () => {

    const signUpStore = useSelector((state) => state.signUpStore);
    const step = useSelector((state) => state.stepStore);
    const dispatch = useDispatch();
    const { emailError, zipCodeError } = signUpStore;
    const signUpFailEmailAPI = () => dispatch({ type: SIGNUP_FAIL_EMAIL, payload: INVALID_EMAIL_MESSAGE })
    const signUpFailZipCodeAPI = () => dispatch({ type: SIGNUP_FAIL_ZIPCODE, payload: INVALID_ZIPCODE_MESSAGE })
    const signUpResetAPI = () => dispatch({ type: SIGNUP_RESET });
    const signUpAPI = (zipCode, email) => dispatch(signUpAction(zipCode, email));
    const changeStep = (count) => dispatch(stepAction(count));
    const clearAllCartItemsAPI = () => dispatch(deleteAllCartItemAction());
    return { signUpAPI, signUpFailEmailAPI, emailError, zipCodeError, step, changeStep, clearAllCartItemsAPI, signUpResetAPI, signUpFailZipCodeAPI }
};