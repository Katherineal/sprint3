"use client";
import Head from 'next/head';
import Image from 'next/image.js';
import React, {useState} from 'react';
import ConvertirDe from '../../../componentes/convertirde/ConvertirDe.jsx';
import ConvertirA from '../../../componentes/convertira/ConvertirA.jsx';
import Monedas from '../../../componentes/monedas/Monedas.jsx';
import './page.css';
import Header from '@/componentes/header/Header';
import ItemInfo from '@/componentes/itemInfo/ItemInfo.jsx';


export function Conversor() {
    const [monedaDe, setMonedaDe] = useState('');
    const [monedaA, setMonedaA] = useState('');
    const [cantidad, setCantidad] = useState(0);


    const handleMonedaDeChange = (moneda) => {
        setMonedaDe(moneda);
    };

    const handleMonedaAChange = (moneda) => {
        setMonedaA(moneda);
    };

    const handleCantidadCambiada = (nuevaCantidad) => {
        setCantidad(nuevaCantidad);
    }
    return (
<div>
<Header/>
  <div className='textConversor'>
        <h1>Conversor</h1>
  </div> 
        
          <div className='containerTransferencias'>
        <>
          <div className='containerConversor'>
            <ConvertirDe
              onMonedaDeSeleccionada={handleMonedaDeChange}
              onCantidadCambiada={handleCantidadCambiada}
            />
            <ConvertirA 
              onMonedaASeleccionada={handleMonedaAChange}
              onCantidadCambiada={handleCantidadCambiada}
            />
            <Monedas monedaDe={monedaDe} monedaA={monedaA} cantidad={cantidad} />
          </div>
        </>
      </div>
      <ItemInfo
                title='Precisión y Confianza' 
                text='Nuestro conversor de monedas utiliza datos actualizados en tiempo real y tasas de cambio precisas respaldadas por la entidad bancaria, lo que te brinda la confianza de que tus conversiones serán exactas y fiables.'></ItemInfo>
        
      
      
  
</div>
    )
}

export default Conversor;