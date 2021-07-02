/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Route } from 'react-router-dom';
import { SignUp_HOC, AddItems_HOC, Register_HOC, SignIn_HOC } from '../pages';
import { ProgressBar_HOC } from '../components';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictRoute } from '../components/RestrictRoute';
import { ErrorPage } from '../pages/ErrorPage';
import { SuccessView } from '../components/SuccessView';
import { VerifyCodePage } from '../pages/VerifyCodePage';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <BrowserRouter>
            <div>
                <ProgressBar_HOC />
                <PrivateRoute path="/addItems" component={AddItems_HOC} />
                <Route path="/signin" component={SignIn_HOC} />
                <Route path="/register" component={Register_HOC} />
                <Route path="/success" component={SuccessView} />
                <Route path="/verifyCode" component={VerifyCodePage} />
                <Route path="/" component={SignUp_HOC} exact />
            </div>
            <Route component={ErrorPage} />
        </BrowserRouter>
    );
}