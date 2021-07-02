import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { LoadingBox } from '../components/LoadingBox';
import { verifyCodeAction } from '../redux/actions/verifyCodeAction';
import { VERIFY_CODE_RESET } from '../redux/constants/verifyCodeConstant';

export const VerifyCodePage = () => {
    const [code, setCode] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { loading, result, error } = useSelector((state) => state.verifyUserStore);
    const email = new URLSearchParams(location.search).get('email');
    const isInvalid = code === '' ? true : false;
    const handleSubmit = () => {
        dispatch(verifyCodeAction({ email, code, history }));
    }

    useEffect(() => {
        if (error !== '') {
            console.log('에러가 발생함');
            setTimeout(() => {
                dispatch({ type: VERIFY_CODE_RESET });
            }, 1500);
        }
    }, [dispatch, error]);
    return (
        <>
            <div className="signin">
                <div className="register_signin_form">
                    <h1 className="form__title">Verify your account</h1>
                    <div className="form__base">
                        <input className="form__input"
                            type="text"
                            placeholder="Enter code"
                            onChange={(e) => setCode(e.target.value)}
                            onKeyPress={event => event.key === 'Enter' ? handleSubmit() : null} />
                        <ErrorMessage codeError={error} />
                        <LoadingBox loading={loading} />
                        <button onClick={handleSubmit} className="form__submit" disabled={isInvalid} type="submit">
                            Confirm code
                        </button>
                    </div>

                    <div className="form__text">
                        Didn't get the code? <Link className="form__link" to='/register'>Resend code.</Link>
                    </div>
                    <div className="form__smallText">
                        This page is protected by Canada to ensure you're not a bot. Learn more.
                    </div>


                </div>
            </div>
        </>
    )
}
