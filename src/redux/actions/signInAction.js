import axios from 'axios';
import { saveStorage } from '../../libs/localStorage';
import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_RESET, SIGN_IN_SUCCESS, SIGN_OUT_FAIL, SIGN_OUT_SUCCESS } from '../constants/signInConstant'

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

export const signOutAction = (email) => async (dispatch) => {
    console.log('사인아웃액션');
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    try {
        await axios.put(`${process.env.REACT_APP_EXPRESS_LOCAL}/api/user/signout?email=${email}`, { cartItems }, {
            withCredentials: true,
        });
        localStorage.removeItem('cartItems'); // 여기도 세션스토리지로 바꿔주장
        sessionStorage.removeItem('restaurant-user');
        dispatch({ type: SIGN_IN_RESET });
    } catch (error) {
        dispatch({
            type: SIGN_OUT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}