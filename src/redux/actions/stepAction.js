import { CHANGE_STEP } from '../constants/stepConstant';

export const stepAction = (step) => (dispatch) => {
    dispatch({ type: CHANGE_STEP, step });
}