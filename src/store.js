import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { getAllItemReducer } from './redux/reducers/getAllItemReducer';
import { signUpReducer } from './redux/reducers/signUpReducer';
import { stepReducer } from './redux/reducers/stepReducer';

const rootReducer = combineReducers({
    signUpStore: signUpReducer,
    stepStore: stepReducer,
    getAllItemStore: getAllItemReducer,
});

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(promise, thunk)));