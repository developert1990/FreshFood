import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { signOutAction } from '../../redux/actions/signInAction';
import { useHistory } from 'react-router';


export const AvatarDetail = ({ isComponentVisible, userInfo }) => {
    const { email, name } = userInfo;
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSignOut = () => {
        dispatch(signOutAction(email, history));
        console.log('this is signout');
    };

    return (
        < >
            {
                isComponentVisible ? (
                    <div className="innerDetail">
                        <div className="top">
                            <Avatar className="innerAvatar" alt="Temy Sharp" src="/static/images/avatar/1.jpg" />
                            <div className="name">{name}</div>
                            <div className="email">{email}</div>
                        </div>
                        <div className="middle">middle</div>
                        <div className="bottom">
                            <div>
                                <div className="signout" onClick={handleSignOut}>SIGN OUT</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )
            }
        </>
    )
}
