"use client"
import React, { useState } from 'react';
import './Footer.css';
import { Icon } from '../Icon';

const Footer=()=> {
    return (
    <section className='sectionFooter' >
        <div className='containerFooter'>
            <div className='containerImg' >
                <img src="./fotos/itbank.png" alt="itbank"/> 
            </div>
            <div className='containerInfoGral' >
                <div class="itemInfo">
                    <h4>Direcciones</h4>
                    <p>Av. San Juan 123</p>
                    <p>Estados Unidos 4567</p>
                    <h4>Teléfono</h4>
                    <p>0810-123-4567</p>
                    <p>0810-123-4567</p>
                </div>
                <div class="itemInfo">
                    <h4>Horario</h4>
                    <p>Lunes a viernes: de 8:30 a 14:00 h.</p>
                    <h4>Horario comercial</h4>
                    <p>Lunes a viernes: 10:00 a 19:30 h.</p> 
                    <p>Sábados: 10:00 a 14:00 h.</p>
                </div>
                
            </div>
            
        </div>
        <div class="containerSocials">
            <div class="social">
                <Icon 
                    onClick={()=>{window.open("https://www.facebook.com")}}
                    className='Icon' 
                    type={"facebook"} 
                /> 
            </div>
            <div class="social">
                <Icon 
                    onClick={()=>{window.open("https://www.instagram.com")}}
                    className='Icon' 
                    type={"instagram"} 
                /> 
            </div>
            <div class="social">
                <Icon 
                    onClick={()=>{window.open("https://www.twitter.com")}}
                    className='Icon' 
                    type={"twitter"} 
                /> 
            </div>
        </div>
        <h5>COPYRIGHT © 2023 ITBANK</h5>  
    </section>
);
}

export default Footer;