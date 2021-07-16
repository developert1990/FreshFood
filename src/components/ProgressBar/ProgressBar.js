import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useHistory, useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Cart } from '../Cart/index';
import { Navigation_HOC } from '../NavigationBar';
import { NavAvatar } from '../Avatar/NavAvatar';
import { useEffect } from 'react';

function getSteps() {
    return ['Sign-Up for your food', 'Select Items', 'Order'];
}

export const ProgressBar = ({ step }) => {
    const history = useHistory();
    const steps = getSteps();
    const handleClick = () => {
        history.push('/');
    }

    return (
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
    )
}