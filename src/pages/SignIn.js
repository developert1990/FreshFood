import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { LoadingBox } from '../components/LoadingBox';
import { ErrorMessage } from '../components/ErrorMessage';
import { SIGN_IN_RESET } from '../redux/constants/signInConstant';

export const SignIn = ({ loading, userInfo, err, signInAPI }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const redirect = location.search ? location.search.split('=')[1] : '/';
    const isInvalid = email === '' || password === '';



    useEffect(() => {
        if (err) {
            setTimeout(() => {
                dispatch({ type: SIGN_IN_RESET })
            }, 2000);
        }
    }, [err]);

    useEffect(() => {
        if (userInfo) {
            setTimeout(() => {
                history.push('/success');
            }, 1000);
            setTimeout(() => {
                history.push('/');
            }, 3000)
        }
    }, [history, signInAPI, userInfo])

    const handleSignIn = () => {
        signInAPI({ email, password });
        if (userInfo) {
            setTimeout(() => {
                history.push('/success');
            }, 1000);
            setTimeout(() => {
                history.push('/');
            }, 3000)
        }

    }


    return (
        <>
            <div className="signin">
                <div className="register_signin_form">
                    <h1 className="form__title">Sign In</h1>
                    <div className="form__base">
                        <input className="form__input"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            name="email" />
                        <input className="form__input"
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            onKeyPress={event => event.key === 'Enter' ? handleSignIn() : null} />
                        <ErrorMessage codeError={err} />
                        <LoadingBox loading={loading} />
                        <button onClick={handleSignIn} className="form__submit" disabled={isInvalid} type="submit">
                            Sign In
                        </button>
                    </div>

                    <div className="form__text">
                        New customer? <Link className="form__link" to='/register'>Sign up now.</Link>
                    </div>
                    <div className="form__smallText">
                        This page is protected by Canada to ensure you're not a bot. Learn more.
                    </div>


                </div>
            </div>
        </>
    )
}
