import axios from 'axios';
import { userAuthentication } from '../../libs/userAuthentication';
import { AUTH_USER_FAIL, AUTH_USER_REQUEST, AUTH_USER_SUCCESS } from '../constants/userAuthConstant';

export const userAuthAction = () => async (dispatch) => {
    console.log('ㅅㅣㄹ행됨d');
    dispatch({ type: AUTH_USER_REQUEST });
    try {
        const { data: { body: { userInfo } } } = await userAuthentication();
        console.log('userInfo :>> ', userInfo);
        dispatch({ type: AUTH_USER_SUCCESS, payload: userInfo })
    } catch (error) {
        dispatch({
            type: AUTH_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
};
