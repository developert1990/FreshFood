/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Route } from 'react-router-dom';
import { AddItems } from '../components/AddItems';
import { Footer } from '../components/Footer';
import { SignUp_HOC } from '../pages';
import { AnimatedSwitch } from 'react-router-transition';
import { ProgressBar_HOC } from '../components';
import { PrivateRoute } from '../components/PrivateRoute';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <BrowserRouter>
            <div className="brandName">Fresh Meal Plans</div>
            <ProgressBar_HOC />
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <PrivateRoute path="/addItems" component={AddItems} />
                <Route path="/" component={SignUp_HOC} exact />
            </AnimatedSwitch>
            <Footer />
        </BrowserRouter>
    );
}