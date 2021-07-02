import axios from 'axios';
import { VERIFY_CODE_FAIL, VERIFY_CODE_REQUEST, VERIFY_CODE_SUCCESS } from '../constants/verifyCodeConstant';

export const verifyCodeAction = ({ email, code, history }) => async (dispatch) => {
    dispatch({ type: VERIFY_CODE_REQUEST });
    try {
        const result = await axios.patch(`${process.env.REACT_APP_EXPRESS_LOCAL}/api/user?email=${email}&code=${code}`);
        dispatch({ type: VERIFY_CODE_SUCCESS, payload: result.data.body.status });
        sessionStorage.removeItem('register');
        setTimeout(() => {
            history.push('/success');
        }, 1000);
        setTimeout(() => {
            history.push(`/signin`);
        }, 3000);
    } catch (error) {
        dispatch({
            type: VERIFY_CODE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
};
