import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { EMAIL_REG_EXP } from '../config';
import { MessageBox } from '../components/MessageBox';

export const SignUp = ({ signUpAPI, signUpFailAPI, error, step, changeStep }) => {
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const isInvalid = email === '' || zipCode === '';
    const focusInput = useRef();

    const handleSubmit = () => {
        if (!email.match(EMAIL_REG_EXP)) {
            signUpFailAPI();
            setEmail("");
            setZipCode("");
            focusInput.current.focus();
            setOpen(true);
        } else {
            signUpAPI(zipCode, email);
            changeStep(1);
            history.push('/addItems');
        }
    }

    useEffect(() => {
        focusInput.current.focus();
        if (step === 1) {
            changeStep(-1);
        }
    }, [])

    return (
        <div className="SignUpPage">
            <div className="test">
                <div className="form">
                    <h1 className="formTitle">THE MEAL THAT TASTES LIKE NO OTHER</h1>
                    <h2 className="formSubTitle">27 deliciously different meals to inspire the everyday chef.</h2>
                    <div className="formBase">
                        <input className="formInput"
                            autoComplete="off"
                            placeholder="Shipping zipcode"
                            onChange={(e) => setZipCode(e.target.value)}
                            name="zipCode"
                            value={zipCode}
                            ref={focusInput} />
                        <input className="formInput"
                            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={event => event.key === 'Enter' ? handleSubmit() : null}
                            name="email"
                            value={email} />
                        <MessageBox open={open} handleAlertClose={() => setOpen(false)} message={error} />
                        <button onClick={handleSubmit} className="formSubmit" disabled={isInvalid} type="submit">
                            Start cooking now
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
