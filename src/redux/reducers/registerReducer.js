import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_RESET, REGISTER_SUCCESS } from '../constants/registerConstant';

const initialState = {
    loading: false,
    result: undefined,
    error: '',
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, loading: true }
        case REGISTER_SUCCESS:
            sessionStorage.setItem('register', action.email);
            return { ...state, loading: false, result: action.payload };
        case REGISTER_FAIL:
            return { ...state, loading: false, error: action.payload };
        case REGISTER_RESET:
            return initialState;
        default:
            return state;
    }
}