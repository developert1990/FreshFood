/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Route } from 'react-router-dom';
import { SignUp_HOC, AddItems_HOC } from '../pages';
import { ProgressBar_HOC } from '../components';
import { PrivateRoute } from '../components/PrivateRoute';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <BrowserRouter>
            <div className="routeOuter">
                <ProgressBar_HOC />
                <PrivateRoute path="/addItems" component={AddItems_HOC} />
                <Route path="/" component={SignUp_HOC} exact />
            </div>
        </BrowserRouter>
    );
}