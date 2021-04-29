import { CHANGE_STEP } from '../constants/stepConstant';

export const stepInitialState = {
    step: 0,
}

export const stepReducer = (state = stepInitialState.step, action) => {
    switch (action.type) {
        case CHANGE_STEP:
            return state + action.step;
        default:
            return state;
    }
}