"use client"
import React, { useState } from 'react';
import './Card.css';

const Card=({title,text,img})=> {
    return (
    <section>
        <div className='containerCard'>
            <div id='cardImg'>
                <img src={img}  alt=""></img>
            </div>
            <div className='cardText' >
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
        
    </section>
);
}

export default Card;