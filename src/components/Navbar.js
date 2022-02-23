import React from 'react'
import logo from '../img/logoAOE2.png'
import '../styles/Navbar.css'
import { useState } from 'react'
import { SignUp } from './SignUp'
import { useSelector, useDispatch } from 'react-redux'
import{Link} from 'react-router-dom'

export const Navbar = () => {

    const [openedLogin, setOpenedLogin] = useState(false)
    const [openedSignup, setOpenedSignup] = useState(false)

    const openLoginModal = () => {
        setOpenedLogin(openedLogin => !openedLogin)
    }
    const openSignupModal = () => {
        setOpenedSignup(openedSignup => !openedSignup)
    }

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    return (
        <div>
            <SignUp trigger={openedSignup} triggerOff={openSignupModal} />
            <nav className="navbar navbar-light bg-transparent row">
                <div className="col text-light">{users[users.length - 1].name}</div>
                <div className="col-6 d-flex">
                    <div className='navbarLogo'>
                    <Link to="/"><img src={logo} alt="" /></Link>     
                        <h5 className='text-center'>DATABASE</h5>
                    </div>
                </div>
                <div className="col d-flex justify-content-end">
                    <span className='me-5 buttonSignLogNavbar' onClick={openLoginModal}>LOGIN</span>

                    <span className='me-5 buttonSignLogNavbar' onClick={openSignupModal}>SIGNUP</span>
                </div>
            </nav>
        </div>
    )
}
