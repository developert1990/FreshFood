import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useHistory, useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Cart } from '../Cart/index';
import { NavigationBarHOC } from '../NavigationBar';
import { NavAvatar } from '../Avatar/NavAvatar';
import { useEffect } from 'react';
import { ProgressBarHOC } from '../ProgressBar';

function getSteps() {
    return ['Sign-Up for your food', 'Select Items', 'Order'];
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export const Navigation = ({ authUser, userInfo }) => {
    const classes = useStyles();
    const history = useHistory();
    const steps = getSteps();
    const location = useLocation();
    console.log('네비게이션', userInfo);
    return (
        <div className="progressBar animate-navbar">
            <NavigationBarHOC />
            <div className={classes.root}>
                <div className="brandName">Fresh Meal Plans</div>
                <ProgressBarHOC />
            </div>
            <div className="brandLogo">
                <div className="bikeLogo1"></div>
                {
                    userInfo &&
                    <div className="avatar">
                        <NavAvatar userInfo={userInfo} />
                    </div>
                }
                {console.log(`location.pathname`, location.pathname)}
                {
                    location.pathname === "/addItems"&&
                    <Cart />
                }
            </div>
        </div>
    )
}