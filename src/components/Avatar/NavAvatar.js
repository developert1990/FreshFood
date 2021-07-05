import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { AvatarDetail } from './AvatarDetail';
import useOutsideDetect from '../../hooks/useOutsideDetect';

export const NavAvatar = ({ userInfo }) => {
    const { ref, isComponentVisible } = useOutsideDetect(false);

    return (
        <div className="navAvatart" ref={ref} >
            <div className="avatar" style={{ cursor: 'pointer' }}>
                <Avatar alt="Temy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <div className={isComponentVisible ? "avatarDetail" : ""}>
                <AvatarDetail isComponentVisible={isComponentVisible} userInfo={userInfo} />
            </div>
        </div>
    )
}
