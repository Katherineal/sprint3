"use client"
import React, { useState, useEffect } from 'react';
import './page.css';
import Header from '@/componentes/header/Header';
import { Button } from 'react-bootstrap';
import Card from '@/componentes/card/Card';

export default function Prestamos() {
  const [resultado, setResultado] = useState({
    totalAPagar: 0,
    cuotaMensual: 0,
  });

  const handleCalculadoraClick = () => {
    const montoPrestamo = parseFloat(document.getElementById("monto-prestamo").value);
    const tasaInteres = parseFloat(document.getElementById("tasa").value / 100);
    const plazoPrestamo = parseFloat(document.getElementById("plazo-prestamo").value);

    const tasaMensual = tasaInteres / 12;
    const pagoTotales = plazoPrestamo;

    const pagoMensual = (montoPrestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -pagoTotales));
    const pagoTotal = pagoMensual * pagoTotales;

    // Actualizamos el estado con los resultados
    setResultado({
      totalAPagar: pagoTotal.toFixed(2),
      cuotaMensual: pagoMensual.toFixed(2),
    });
  };

  return (
    <div>
      <Header/>
      <h1 className='titlePrestamo'>Calculadora de préstamos</h1>
      <div className="account-card">
        <form name="prestamo-form">
          <label htmlFor="monto-prestamo">Monto del préstamo: </label>
          <input type="number" id="monto-prestamo" name="monto-prestamo" />
          <label htmlFor="tasa">Tasa de interés anual (%): </label>
          <input type="number" id="tasa" step="0.01" name="tasa" />
          <label htmlFor="plazo-prestamo">Plazo del préstamo: </label>
          <select id="plazo-prestamo" name="plazo-prestamo">
            <option value={3}>3 MESES</option>
            <option value={6}>6 MESES</option>
            <option value={12}>12 MESES</option>
            <option value={24}>24 MESES</option>
          </select>
          {/* Usamos onClick para manejar el evento clic del botón */}
          <Button onClick={handleCalculadoraClick} variant="primary">Calcular</Button>{' '}
        
        </form>
        <h2>TOTAL</h2>
        <p>Monto total a pagar: <span id="total-a-pagar">{resultado.totalAPagar}</span></p>
        <p>Cuota mensual: <span id="cuota-mensual">{resultado.cuotaMensual}</span></p>
      </div>
      <Card
            title='¡Haz realidad tu sueño de tener tu propia casa!' 
            text='Nuestro Préstamo para Construcción de Viviendas te ofrece tasas competitivas, plazos flexibles y asesoramiento experto para que puedas construir la casa de tus sueños. ¡Contáctanos hoy y comienza a construir tu futuro!' 
            img='https://img.freepik.com/vector-gratis/concepto-abstracto-desarrollo-inmobiliario_335657-3115.jpg?w=1060&t=st=1695261731~exp=1695262331~hmac=9c99a63e59e1669644a2050ca104db8ae13521f3dbb1cb126af6d3dcad21a32c'></Card>
      <Card
            title='Obtén el respaldo financiero que necesitas' 
            text='Con aprobación rápida, flexibilidad de uso y tasas competitivas, estamos aquí para ayudarte a superar tus desafíos económicos y lograr tus metas.' 
            img='https://img.freepik.com/vector-gratis/concepto-abstracto-prestamos-dinero_335657-3053.jpg?w=1060&t=st=1695261920~exp=1695262520~hmac=2857774cedeeb53947686f4f173307379d412d0a00f665cf96f809380871422a'></Card>

    </div>
  );
}