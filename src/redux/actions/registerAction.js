import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from '../constants/registerConstant';
import axios from 'axios';

export const registerAction = (userInfo, history) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    console.log('userInfo :>> ', userInfo);
    try {
        const result = await axios.put(`${process.env.REACT_APP_EXPRESS_LOCAL}/api/user`, userInfo);
        dispatch({ type: REGISTER_SUCCESS, payload: result.data.body, email: userInfo.email });
        setTimeout(() => {
            console.log('석세스');
            history.push('/success');
        }, 1000);
        setTimeout(() => {
            console.log('베리파이페이지로 히스토리');
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