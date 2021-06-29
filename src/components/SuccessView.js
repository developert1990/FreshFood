import React from 'react'
import Fade from 'react-reveal/Fade';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
export const SuccessView = () => {
    return (
        <Fade>
            <div className="successView">
                <div className="sign">
                    <div className="checkSign">
                        <CheckRoundedIcon />
                    </div>
                    <div className="successMsg">
                        Success!!!
                    </div>
                </div>
            </div>
        </Fade>
    )
}
