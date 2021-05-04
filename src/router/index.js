/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { SignUp_HOC, AddItems_HOC } from '../pages';
import { AnimatedSwitch } from 'react-router-transition';
import { ProgressBar_HOC } from '../components';
import { PrivateRoute } from '../components/PrivateRoute';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <BrowserRouter>
            <ProgressBar_HOC />
            <AnimatedSwitch
                atEnter={{ opacity: 0.1 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <PrivateRoute path="/addItems" component={AddItems_HOC} />
                <Route path="/" component={SignUp_HOC} exact />
            </AnimatedSwitch>
            <Footer />
        </BrowserRouter>
    );
}