import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { userData } = useSelector((state) => state.signUpStore);
    console.log('userData :>> ', userData);
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