import React from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';

import HeaderOption from './HeaderOption';

import { auth } from './firebase';
import { logout } from './features/userSlice';

const Header = () => {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());

        auth.signOut()
    };
    return (
        <div className='header'> 
           <div className='logo'>
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Apigee_logo.svg/1200px-Apigee_logo.svg.png' 
                    alt='' 
                />
           </div>

            <div className='signin'>
                
                <HeaderOption avatar={true} name={true}
                    onClick={logoutOfApp}
                />
           </div>

        </div>
    )
}

export default Header
