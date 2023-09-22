"use client"
import React, { useState } from 'react'
import "./ConvertirA.css"

function ConvertirA({onMonedaASeleccionada}) {
  const [monedaA, setMonedaA] = useState('');

  const handleMonedaAChange = (event) => {
    const nuevaMonedaA = event.target.value;
    setMonedaA(nuevaMonedaA);
    onMonedaASeleccionada(nuevaMonedaA);
  };

  return (
    <div className='ConvertirA'>
        <h3>Convertir A:</h3>
        <select name="" value={monedaA} onChange={handleMonedaAChange}>
        <option>ARS</option>
            <option>USD</option>
            <option>EUR</option>
            <option>BRL</option>
            <option>CNY</option>
            <option>JPY</option>
            <option>RUB</option>
            <option>CLP</option>
            <option>MXN</option>
            <option>UYU</option>
        </select>
    </div>
  );
}

export default ConvertirA;