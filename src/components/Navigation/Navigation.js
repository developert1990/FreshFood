import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Navigation = ({ authUser, userInfo }) => {
    useEffect(() => {
        authUser();
    }, []);
    return (
        <ul className="navBar">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/contact">CONTACT US</Link>
            {
                userInfo ?
                    <div>{userInfo.name}</div> :
                    <Link to="/signin">SIGN IN</Link>
            }
        </ul>
    )
}
