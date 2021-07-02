import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { cartReducer } from './redux/reducers/cartReducer';
import { getAllItemReducer } from './redux/reducers/getAllItemReducer';
import { registerReducer } from './redux/reducers/registerReducer';
import { signInReducer } from './redux/reducers/signInReducer';
import { signUpReducer } from './redux/reducers/signUpReducer';
import { stepReducer } from './redux/reducers/stepReducer';
import { userAuthReducer } from './redux/reducers/userAuthReducer';
import { verifyCodeReducer } from './redux/reducers/verifyCodeReducer';

const rootReducer = combineReducers({
    signUpStore: signUpReducer,
    stepStore: stepReducer,
    getAllItemStore: getAllItemReducer,
    cartStore: cartReducer,
    registerStore: registerReducer,
    signInStore: signInReducer,
    userStore: userAuthReducer,
    verifyUserStore: verifyCodeReducer,
});

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(promise, thunk)));