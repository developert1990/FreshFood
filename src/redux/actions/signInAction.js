import axios from 'axios';
import { saveStorage } from '../../libs/localStorage';
import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../constants/signInConstant'

export const signInAction = ({ email, password }) => async (dispatch) => {
    dispatch({ type: SIGN_IN_REQUEST });
    try {
        const { data: { body: { userInfo } } } = await axios.post(`${process.env.REACT_APP_EXPRESS_LOCAL}/api/user`, { email, password }, {
            withCredentials: true,
        });
        saveStorage(userInfo);
        dispatch({ type: SIGN_IN_SUCCESS, payload: userInfo });
    } catch (error) {
        dispatch({
            type: SIGN_IN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}