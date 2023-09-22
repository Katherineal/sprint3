"use client";
import './page.css';
import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/componentes/header/Header';

async function obtenerDatosDeCuenta(id) {
  const cuenta = {
    id: id,
    saldo: 1000,
  };
  return cuenta;
}
export function CuentaBancaria({ cuenta }) {
  return (
    <div>
      <Header/>
      
      <div className='contenedor'>
            <h1 className='cabecera'>Datos del usuario</h1>
            <h5 className='datos'>Banco: </h5>
            <h5 className='datos'>Cuil/Cuit: </h5>
            <h5 className='datos'>CBU: </h5>
      </div>
      
    </div>
  );
}

async function getServerSideProps(context) {
  const id = context.params.id;

  const cuenta = await obtenerDatosDeCuenta(id);

  return {
    props: {
      cuenta,
    },
  };
}

export default CuentaBancaria;