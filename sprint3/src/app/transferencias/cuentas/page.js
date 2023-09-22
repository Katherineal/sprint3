"use client";
import Header from '@/componentes/header/Header';
import './page.modules.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Cuentas(){
  const router=useRouter()
    return(
      <div>
        <Header/>
      <div className='contenedorTransferencia'>
            <Head>
            <title>Transacción</title>
            <meta name="Realiza transacciones bancarias" content="Pagina web para realizar transacciones bancarias online." />
            </Head>
      <h1>Saldo:</h1>
      <div>
      <h2 className='titulos'>¿A quién deseas enviarle dinero?</h2>
      <button className='buttonCuentas' onClick={()=>{router.push("/transferencias/cuentas/1")}} variant="primary"> VER CUENTAS REGISTRADAS </button>{' '}
      
      <div className='labels'>
        <label htmlFor="monto">Monto:</label>
        <input
          type="number"
          id="monto"
        />
      </div>
      <div>
        <label htmlFor="destinatario">Alias/CBU:</label>
        <input
          type="text"
          id="destinatario"
        />
      </div>
      <button className='buttonCuentas' onClick={()=>{router.push("")}} variant="primary"> REALIZAR TRANSFERENCIA </button>{' '}
      </div>
    </div>
    </div>
    )
}