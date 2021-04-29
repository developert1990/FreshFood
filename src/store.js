import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { signUpReducer } from './redux/reducers/signUpReducer';

const rootReducer = combineReducers({
    signUpStore: signUpReducer
});

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(promise, thunk)));