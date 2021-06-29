import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { registerValidation } from '../libs/registerValidation';
import { ErrorMessage } from '../components/ErrorMessage';
import { LoadingBox } from '../components/LoadingBox';
import { useEffect } from 'react';

export const Register = ({ registerAPI, loading, userInfo, error, registerResetAPI }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [inputError, setInputError] = useState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
    });
    const location = useLocation();
    const history = useHistory();
    const redirect = location.search ? location.search.split("=")[1] : '/';

    const isInvalid = firstName === '' || lastName === '' || password === '' || email === '' || confirmPassword === '';

    const handleSignup = () => {
        const result = registerValidation({ firstName, lastName, email, password, confirmPassword });
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
                default:
                    return;
            }
            // if validating success
        } else {
            registerAPI({ firstName, lastName, email, password });


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

    useEffect(() => {
        if (error !== '') {
            console.log('에러가 발생함');
            setTimeout(() => {
                registerResetAPI();
            }, 1500);
        } else if (userInfo) {
            setTimeout(() => {
                history.push('/success');
            }, 1000);
            setTimeout(() => {
                history.push(`/signin?redirect=${email}`);
            }, 3000);
        }
    }, [email, error, history, registerResetAPI, userInfo])
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
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} />
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
