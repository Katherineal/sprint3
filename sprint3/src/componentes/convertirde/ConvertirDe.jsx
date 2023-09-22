"use client"
import React, {useState} from 'react'
import "./ConvertirDe.css"
import { Form, InputGroup } from 'react-bootstrap';

function ConvertirDe({onMonedaDeSeleccionada, onCantidadCambiada}) {
  const [monedaDe, setMonedaDe] = useState('');
  const [cantidad, setCantidad] = useState(0);

  const handleMonedaDeChange = (event) => {
    const nuevaMonedaDe = event.target.value;
    setMonedaDe(nuevaMonedaDe);
    onMonedaDeSeleccionada(nuevaMonedaDe);
  };
  const handleCantidadChange = (event) => {
    const nuevaCantidad = parseFloat(event.target.value);
    setCantidad(nuevaCantidad);
    onCantidadCambiada(nuevaCantidad);
  };


  return (
    <div className='containerConvertirDe'>
      <div className='Cantidad'>
        <h3 id="LabelCant">Cantidad: </h3>
        <input type="number" id="Cantidad" value={cantidad} onChange={handleCantidadChange}/>
      </div>
      <div className='ConvertirDe'>
          <h3>Convertir De:</h3>
          <select name="" value={monedaDe} onChange={handleMonedaDeChange}>
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
    </div>
  );
}

export default ConvertirDe;