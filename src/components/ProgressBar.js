import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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

export const ProgressBar = ({ step }) => {
    const classes = useStyles();
    const history = useHistory();
    const steps = getSteps();
    const handleClick = () => {
        history.push('/');
    }
    return (
        <div className="progressBar">
            <div className="brandName">Fresh Meal Plans</div>
            <ul className="navBar">
                <Link to="/">HOME</Link>
                <Link to="/">ABOUT US</Link>
                <Link to="/">SERVICES</Link>
                <Link to="/">CONTACT US</Link>
            </ul>
            <div className={classes.root}>
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
        </div>
    )
}
