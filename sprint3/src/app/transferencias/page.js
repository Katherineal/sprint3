"use client";
import './page.modules.css';
import Link from 'next/link';
import Header from '@/componentes/header/Header';
import ItemInfo from '@/componentes/itemInfo/ItemInfo';

function Transferencias(){
    return(
<div>
  <Header/>
    <div className='textTransferencias'>
      <h1 className='titleTransferencias'>Transferencias</h1>
      <p>Realiza transacciones y conversiones en tu sitio web.</p>    
    </div>      
          <div className='contenedor'>
          <h2 className='titulo'>¿Que deseas realizar?</h2>
          <Link href="/transferencias/cuentas">
            <button className='buttonTransferencias'>Transacción</button>
          </Link>
          <Link href="/transferencias/conversor">
            <button className='buttonTransferencias'>Conversión</button>
          </Link>
        </div>

        <ItemInfo
                title='Comodidad y Accesibilidad' 
                text='Transferir dinero en línea elimina la necesidad de desplazarte físicamente a una sucursal bancaria. Puedes hacerlo desde la comodidad de tu hogar o cualquier lugar con acceso a Internet, lo que ahorra tiempo y esfuerzo.'></ItemInfo>
        <ItemInfo
                title='Disponibilidad las 24/7' 
                text='Nuestra plataforma de banca en línea está disponible las 24 horas del día, los 7 días de la semana. Esto significa que puedes realizar transferencias en cualquier momento que sea conveniente para ti, incluso fuera del horario comercial regular.'></ItemInfo>
        <ItemInfo
                title='Seguridad' 
                text='Nuestro banco invierte en medidas de seguridad avanzadas para proteger tus transacciones en línea. Los sistemas de autenticación, el cifrado de datos y las notificaciones de actividad sospechosa garantizan la confidencialidad y la integridad de tus transferencias.'></ItemInfo>
        <ItemInfo
                title='Historial de Transacciones' 
                text='Nuestro banco invierte en medidas de seguridad avanzadas para proteger tus transacciones en línea. Los sistemas de autenticación, el cifrado de datos y las notificaciones de actividad sospechosa garantizan la confidencialidad y la integridad de tus transferencias.'></ItemInfo>

  
</div>

      );
}
export default Transferencias;