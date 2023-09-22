"use client"
import React, { useEffect } from 'react';
import * as styles from './page.module.css';
import Header from '@/componentes/header/Header';
import TextControlsExample from '@/componentes/form/Form';
import Button from 'react-bootstrap/Button';
import ItemInfo from '@/componentes/itemInfo/ItemInfo';
import { useRouter } from 'next/navigation';


export default function Main() {
    const router=useRouter()
return (
    <div>
        <Header/>
            <div className={styles.containerWelcomeItem} >
                <div className={styles.containerText}>
                    <h1>¡Hola! Bienvenido a Online Banking.</h1>
                    <p>Donde tu dinero encuentra un hogar seguro. </p>
                    <Button onClick={()=>{router.push("/login")}} variant="primary">Ingresar</Button>{' '}
                    <Button onClick={()=>{router.push("/registro")}} variant="primary">Registrarse</Button>{' '}
                
                </div>
            </div>

            <ItemInfo
                title='Banco online' 
                text='Descubre la versatilidad de nuestro acceso en línea, disponible
                    las 24 horas del día, desde cualquier dispositivo conectado a 
                    Internet. En ITBANK, hemos diseñado nuestra Banca en Línea para 
                    que puedas realizar consultas y operaciones en cualquier momento 
                    que lo necesites. Además, obtén y recupera tus claves de manera 
                    sencilla y segura, todo en línea. Aprovecha nuestras tasas 
                    preferenciales en productos seleccionados y gestiona la alta y 
                    baja de productos de forma cómoda y segura.'></ItemInfo>
            <ItemInfo
                title='Servicios' 
                text=' '>
                    <ul>
                        <li>Gestiona tus reclamos en línea de forma eficiente.</li>
                        <li>Recupera tu clave de Cajero Automático de manera rápida.</li>
                        <li>Actualiza tus datos de contacto de manera conveniente. </li>
                        <li>Personaliza tus alertas de productos y servicios según tus preferencias.</li>
                        <li>Visualiza y descarga los resúmenes unificados de tus cuentas y tarjetas actuales y anteriores. </li>
                        <li>Accede a los comprobantes de todas tus operaciones.</li>
                        <li>Contrata seguros y aprovecha nuestros beneficios.</li>
                        <li>Comienza a recibir tu sueldo con ITBANK y obtén Millas o Cashback de regalo.</li>
                    </ul>

                </ItemInfo>
            <ItemInfo
                title='Costos y comisiones' 
                text='La utilización de nuestra Banca en Línea es completamente 
                gratuita. En ITBANK, nos preocupamos por ofrecerte servicios 
                bancarios digitales de calidad sin costos adicionales.'></ItemInfo>

            <TextControlsExample/>
            <section id={styles.map}>
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23949906453!2d-58.43329845000001!3d-34.615823750000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1693009067427!5m2!1ses-419!2sar" width="100%" height="500" ></iframe>
            </section>
        </div>
)
}
