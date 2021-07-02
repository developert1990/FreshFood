import { VERIFY_CODE_FAIL, VERIFY_CODE_REQUEST, VERIFY_CODE_RESET, VERIFY_CODE_SUCCESS } from '../constants/verifyCodeConstant';

const initialState = {
    loading: false,
    result: undefined,
    error: '',
};

export const verifyCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case VERIFY_CODE_REQUEST:
            return { ...state, loading: true };
        case VERIFY_CODE_SUCCESS:
            return { ...state, loading: false, result: action.payload };
        case VERIFY_CODE_FAIL:
            return { ...state, loading: false, error: action.payload };
        case VERIFY_CODE_RESET:
            return initialState;
        default:
            return state;
    }
}