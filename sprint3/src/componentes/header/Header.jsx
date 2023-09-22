"use client"
import React, { useState } from 'react';
import './Header.css';
import { Icon } from '../Icon';
import Navbar from '../navbar/Navbar.jsx';
import { useAuth } from '@/helpers/auth-provider';

function Header({showNavbar=true}) {
    const auth = useAuth()
    const [showNav, setshownav] = useState(false)
    const changeState =()=>{
        if (showNav==true){ 
            setshownav(false)
        } 
        else {
            setshownav(true)
        }
    }
    return (
    <header>
        <div className='containerHeader'>
            <div id='containerLogo'>
                <img class="logo-1" title="itbanklogo" alt='itbank logo' src="./fotos/itbank.png"  ></img>
            </div>
            {
                auth.user&&(
                <div 
                    className='containerIcon' 
                    onClick={changeState}>
                        <Icon className='Icon' type={"bar"} /> 
            </div>)
            }
        </div>
        {
            auth.user&&(<div className='navBar'>
            {
                showNav ? (<Navbar/>):null
            }
        </div>)
        }
    </header>
);
}

export default Header;