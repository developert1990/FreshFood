import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_RESET } from '../constants/signInConstant';

const initialState = {
    loading: false,
    userInfo: undefined,
    err: '',
};

export const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return { ...state, loading: true }
        case SIGN_IN_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload }
        case SIGN_IN_FAIL:
            return { ...state, loading: false, err: action.payload }
        case SIGN_IN_RESET:
            return initialState;
        default:
            return state;
    }
}