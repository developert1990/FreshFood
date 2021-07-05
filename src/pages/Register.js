import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { registerValidation } from '../libs/registerValidation';
import { ErrorMessage } from '../components/ErrorMessage';
import { LoadingBox } from '../components/LoadingBox';
import { useEffect } from 'react';
import { PasswordValidBox } from '../components/PasswordValidBox';
import useOutsideDetect from '../hooks/useOutsideDetect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { passwordCondition } from '../libs/passwordCondition';

export const Register = ({ registerAPI, loading, result, error, registerResetAPI }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pwConvention, setPwConvention] = useState({
        first: false,
        second: false,
        third: false,
        forth: false,
    });

    const [pwCondition_first, setPwCondition_first] = useState(false);
    const [pwCondition_second, setPwCondition_second] = useState(false);
    const [pwCondition_third, setPwCondition_third] = useState(false);
    const [pwCondition_forth, setPwCondition_forth] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const { ref, isComponentVisible } = useOutsideDetect(false);
    const [inputError, setInputError] = useState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
    });
    const [show, setShow] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect = location.search ? location.search.split("=")[1] : '/';

    const isInvalid = firstName === '' || lastName === '' || password === '' || email === '' || confirmPassword === '';

    const handleSignup = () => {
        const obj = {
            pwCondition_first, pwCondition_second, pwCondition_third, pwCondition_forth
        }
        const result = registerValidation({ firstName, lastName, email, password, confirmPassword, obj });
        // if validating fail
        if (result) {
            const { type, error } = result;
            switch (type) {
                case 'firstName':
                    setInputError({ firstNameError: error, lastNameError: '', emailError: '', passwordError: '' });
                    break;
                case 'lastName':
                    setInputError({ firstNameError: '', lastNameError: error, emailError: '', passwordError: '' });
                    break;
                case 'email':
                    setInputError({ firstNameError: '', lastNameError: '', emailError: error, passwordError: '' });
                    break;
                case 'password':
                    setInputError({ firstNameError: '', lastNameError: '', emailError: '', passwordError: error });
                    break;
                case 'pwCodition':
                    setInputError({ firstNameError: '', lastNameError: '', emailError: '', passwordError: error });
                    break;
                default:
                    return;
            }
            // if validating success
        } else {
            registerAPI({ firstName, lastName, email, password }, history);

        }
        setTimeout(() => {
            setInputError({
                firstNameError: '',
                lastNameError: '',
                emailError: '',
                passwordError: '',
            });
        }, 1500);
    }

    const handlePwChange = (value) => {
        setPassword(value);
        passwordCondition(value, setPwCondition_first, setPwCondition_second, setPwCondition_third, setPwCondition_forth);
    }

    useEffect(() => {
        if (error !== '') {
            setTimeout(() => {
                registerResetAPI();
            }, 1500);
        }
    }, [error, registerResetAPI]);

    const handleShowHide = () => {
        setShow(!show);
    }

    return (
        <>
            <div className="signup">
                <div className="register_signin_form">
                    <h1 className="form__title">Sign Up</h1>
                    <ErrorMessage codeError={error} />
                    <div className="form__base">
                        <input className="form__input"
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)} />
                        <ErrorMessage codeError={inputError.firstNameError} />
                        <input className="form__input"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={({ target }) => setLastName(target.value)} />
                        <ErrorMessage codeError={inputError.lastNameError} />
                        <input className="form__input"
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)} />
                        <ErrorMessage codeError={inputError.emailError} />
                        <input className="form__input"
                            type={show ? "text" : "password"}
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => handlePwChange(target.value)}
                            ref={ref} />
                        {
                            show ?
                                <FontAwesomeIcon icon={faEye} id="show_hide" onClick={handleShowHide} /> :
                                <FontAwesomeIcon icon={faEyeSlash} id="show_hide" onClick={handleShowHide} />}
                        {isComponentVisible && <PasswordValidBox />}
                        <input className="form__input"
                            type="password"
                            value={confirmPassword}
                            autoComplete="off"
                            placeholder="Confirm Password"
                            onChange={({ target }) => setConfirmPassword(target.value)} />
                        <ErrorMessage codeError={inputError.passwordError} />
                        <LoadingBox loading={loading} />
                        <button className="form__submit" disabled={isInvalid} onClick={handleSignup} type="submit">
                            Sign Up
                        </button>
                        <div>
                            Already have an account?{''}
                            <Link className="form__link" to={`/signin?redirect=${redirect}`}> Sign In</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
