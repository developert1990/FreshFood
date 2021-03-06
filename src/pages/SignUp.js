import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { EMAIL_REG_EXP, ZIPCODE_REG_EXP } from '../config';
import { SignUpSubSection } from '../components/SignUpSubSection';
import Roll from 'react-reveal/Roll';
import { Footer } from '../components/Footer';
import { ErrorMessage } from '../components/ErrorMessage';
import Fade from 'react-reveal/Fade';

export const SignUp = ({ signUpAPI, signUpFailZipCodeAPI, signUpFailEmailAPI, emailError, zipCodeError, step, changeStep, clearAllCartItemsAPI, signUpResetAPI }) => {
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const history = useHistory();
    const isInvalid = email === '' || zipCode === '';
    const focusInput = useRef();

    const handleSubmit = () => {
        if (!zipCode.match(ZIPCODE_REG_EXP)) {
            signUpFailZipCodeAPI();
            setZipCode("");
            focusInput.current.focus();
            setTimeout(() => {
                signUpResetAPI();
            }, 2000)
            return;
        }
        if (!email.match(EMAIL_REG_EXP)) {
            signUpFailEmailAPI();
            setEmail("");
            focusInput.current.focus();
            setTimeout(() => {
                signUpResetAPI();
            }, 2000)
            return;
        }
        console.log("들어온다")
        signUpAPI(zipCode, email);
        changeStep(1);
        history.push('/addItems');
    }

    useEffect(() => {
        focusInput.current.focus({ preventScroll: true });
        if (step === 1) {
            changeStep(-1);
            clearAllCartItemsAPI();
        }
        localStorage.clear();
    }, [])

    return (
        <Fade>
            <div className="SignUpPage">
                <div className="signUpTop">
                    <div className="formWrapper">
                        <div className="form">
                            <h1 className="formTitle">THE MEAL THAT TASTES LIKE NO OTHER</h1>
                            <h2 className="formSubTitle">27 deliciously different meals to inspire the everyday chef.</h2>
                            <div className="formBase">
                                <input className="formInput"
                                    autoComplete="off"
                                    placeholder="Shipping Zipcode (ex. A2A2S2)"
                                    onChange={(e) => setZipCode(e.target.value)}
                                    onKeyPress={event => event.key === 'Enter' ? handleSubmit() : null}
                                    name="zipCode"
                                    value={zipCode}
                                    ref={focusInput} />
                                {/* {zipCodeError === "" ? "" : <span>{zipCodeError}</span>} */}
                                <ErrorMessage codeError={zipCodeError} />
                                <input className="formInput"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyPress={event => event.key === 'Enter' ? handleSubmit() : null}
                                    name="email"
                                    value={email} />
                                <ErrorMessage codeError={emailError} />
                                <button onClick={handleSubmit} className="formSubmit" disabled={isInvalid} type="submit">
                                    Start cooking now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <SignUpSubSection />
                <Roll left>
                    <Footer />
                </Roll>
            </div>
        </Fade>
    )
}
