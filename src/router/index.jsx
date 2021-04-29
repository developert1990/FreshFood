
import { BrowserRouter, Route } from 'react-router-dom';
import { AddItems, ProgressBar } from '../components';
import { Footer } from '../components/Footer';
import { SignUp_HOC } from '../pages';
import { AnimatedSwitch } from 'react-router-transition';
import { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <BrowserRouter>
            <div className="brandName">Fresh Meal Plans</div>
            <ProgressBar />
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <Route path="/addItems" component={AddItems} />
                <Route path="/" component={SignUp_HOC} exact />
            </AnimatedSwitch>
            <Footer />
        </BrowserRouter>
    );
}