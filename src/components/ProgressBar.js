import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


function getSteps() {
    return ['Sign-Up for your food', 'Select Items', 'Order'];
}

export const ProgressBar = ({ step }) => {
    const steps = getSteps();
    return (
        <div className="progressBar">
            <div className="brandName">Fresh Meal Plans</div>
            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}
