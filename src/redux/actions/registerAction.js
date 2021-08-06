import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from '../constants/registerConstant';
import axios from 'axios';
import { API } from '../../config';

export const registerAction = (userInfo, history) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    console.log('userInfo :>> ', userInfo);
    try {
        const result = await axios.put(`${API}/api/user`, userInfo);
        dispatch({ type: REGISTER_SUCCESS, payload: result.data.body, email: userInfo.email });
        setTimeout(() => {
            history.push('/success');
        }, 1000);
        setTimeout(() => {
            history.push(`/verifyCode?email=${userInfo.email}`);
        }, 3000);

    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });

    }

}