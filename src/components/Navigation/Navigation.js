import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = ({ userData }) => {
    console.log('userData 네비게이션 :>> ', userData);
    return (
        <ul className="navBar">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/contact">CONTACT US</Link>
            <Link to="/signin">SIGN IN</Link>
        </ul>
    )
}
