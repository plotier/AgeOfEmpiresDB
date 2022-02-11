import React from 'react'
import logo from '../img/logoAOE2.png'
import '../styles/Navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-transparent d-flex">

            <div className='navbarLogo'>
                <img src={logo} alt="" />
                <h5 className='text-center'>DATABASE</h5>
            </div>
        </nav>
    )

}

