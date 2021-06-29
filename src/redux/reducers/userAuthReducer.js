import { AUTH_USER_FAIL, AUTH_USER_REQUEST, AUTH_USER_SUCCESS } from '../constants/userAuthConstant';

const initialState = {
    loading: false,
    userInfo: undefined,
    error: '',
};

export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER_REQUEST:
            return { ...state, loading: true };
        case AUTH_USER_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case AUTH_USER_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}