import { useDispatch, useSelector } from 'react-redux';
import { INVALID_EMAIL_MESSAGE } from '../constants';
import { signUpAction } from '../redux/actions/signUpAction';
import { stepAction } from '../redux/actions/stepAction';
import { SIGNUP_FAIL } from '../redux/constants/signUpConstant';

export const useSignUp = () => {
    const signUpStore = useSelector((state) => state.signUpStore);
    const step = useSelector((state) => state.stepStore);
    const dispatch = useDispatch();
    const { error } = signUpStore;
    const signUpFailAPI = () => dispatch({ type: SIGNUP_FAIL, payload: INVALID_EMAIL_MESSAGE })
    const signUpAPI = (zipCode, email) => dispatch(signUpAction(zipCode, email));
    const changeStep = (count) => dispatch(stepAction(count));
    return { signUpAPI, signUpFailAPI, error, step, changeStep }
};