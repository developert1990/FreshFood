import React from 'react';
import Fade from 'react-reveal/Fade';

export const SignUpSubSection = () => {
    return (
        <div>
            <Fade top>
                <div className="signUpSection_2">
                    <div className="advertiseSection">
                        <h1>A recipe box full of flavour</h1>
                        <h2>Your favourite restaurants and takeaways, delivered to your door</h2>
                        <button className="signUpSectionBtn" type="submit">
                            Explore
                    </button>
                    </div>
                    <div className="signUpSection_2_img"></div>
                </div>
            </Fade>
            <Fade left>
                <div className="signUpSection_3">
                    <div className="signUpSection_3_img"></div>
                    <div className="advertiseSection">
                        <h1>Every Flavour Welcome</h1>
                        <h2>Get it delivered right to your door. Or, try Pickup on your way home. It’s mealtime on your time.</h2>
                        <button className="signUpSectionBtn" type="submit">
                            Explore
                    </button>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
