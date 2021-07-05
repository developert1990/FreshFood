import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useHistory, useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Cart } from '../Cart/index';
import { Navigation_HOC } from '../Navigation';
import { NavAvatar } from '../Avatar/NavAvatar';
import { useEffect } from 'react';

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

export const ProgressBar = ({ step, userInfo }) => {
    const classes = useStyles();
    const history = useHistory();
    const steps = getSteps();
    const location = useLocation();
    const handleClick = () => {
        history.push('/');
    }

    return (
        <div className="progressBar animate-navbar">
            <Navigation_HOC />
            <div className={classes.root}>
                <div className="brandName">Fresh Meal Plans</div>
                <Stepper activeStep={step} alternativeLabel>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}
                                className={`${index === 0 ? "active" : "inactive"}`}
                                onClick={index === 0 && handleClick}
                            >
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
            </div>
            <div className="brandLogo">
                <div className="bikeLogo1"></div>
                {
                    userInfo &&
                    <div className="avatar">
                        <NavAvatar userInfo={userInfo} />
                    </div>
                }
                {
                    location.pathname !== "/" &&
                    <Cart />
                }
            </div>
        </div>
    )
}