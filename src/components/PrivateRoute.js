import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const signUpStore = useSelector((state) => state.signUpStore);
    const { userData } = signUpStore;
    return (
        <Route
            {...rest}
            render={(props) => userData ? (
                <Component {...props}></Component>
            ) : (
                <Redirect to="/" />
            )
            }
        >

        </Route>
    )
}