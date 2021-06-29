import Fade from 'react-reveal/Fade';
import React from 'react'

export const ErrorMessage = ({ codeError }) => {
    return (
        <Fade bottom collapse when={codeError !== ""}>
            <div className="invalid-feedback" style={{ display: 'block', marginBottom: "30px", marginTop: "1px" }} >
                {codeError}
            </div>
        </Fade>
    )
}
