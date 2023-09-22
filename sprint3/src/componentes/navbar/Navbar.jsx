"use client"
import React, { useState } from 'react';
import './Navbar.css';
import { useRouter } from 'next/navigation';

const Navbar=()=> {
    const [showNav, setshownav] = useState(false)
    const changeState =()=>{
        if (showNav==true){ 
            setshownav(false)
        } 
        else {
            setshownav(true)
        }
    }
    const Router=useRouter()
    return (
        <div class="menu-1">
        <ul>
            <li><button onClick={()=>Router.push("/home")} title="home">Home</button></li>
            <li><button onClick={()=>Router.push("/tarjetas")} title="cuentas">Tarjetas</button></li>
            <li><button onClick={()=>Router.push("/prestamos")} title="prestamos">Prestamos</button></li>
            <li><button onClick={()=>Router.push("/transferencias")} title="transferencias">Transferencias</button></li>
        </ul>
    </div>
);
}

export default Navbar;