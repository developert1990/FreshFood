import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

export const PasswordValidBox = () => {
    return (
        <Fade>
            <div className="PasswordValidBox">
                <div>
                    <p id="capital">
                        <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
                        <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
                        <span> Capital Letters</span>
                    </p>
                    <p id="char">
                        <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
                        <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
                        <span> Special Characters</span>
                    </p>
                    <p id="num">
                        <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
                        <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
                        <span>Use Numbers</span>
                    </p>
                    <p id="more8">
                        <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
                        <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
                        <span>8+ Characters</span>
                    </p>
                </div>
            </div>
        </Fade>
    )
}
