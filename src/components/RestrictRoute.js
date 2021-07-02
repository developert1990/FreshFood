import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const RestrictRoute = ({ component: Component, ...rest }) => {
    const registerInfo = sessionStorage.getItem('register');
    console.log('registerInfo :>> ', registerInfo);
    return (
        <Route
            {...rest}
            render={(props) => registerInfo ? (
                <Component {...props}></Component>
            ) : (
                <Redirect to="/" />
            )
            }
        >

        </Route>
    )
}