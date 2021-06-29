import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from '../constants/registerConstant';
import axios from 'axios';

export const registerAction = (userInfo) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    console.log('userInfo :>> ', userInfo);
    try {
        console.log('process.env.REACT_APP_LAMBDA_API :>> ', process.env.REACT_APP_LAMBDA_API);
        const result = await axios.put(`${process.env.REACT_APP_EXPRESS_LOCAL}/api/user`, userInfo);
        dispatch({ type: REGISTER_SUCCESS, payload: result });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }

}