"use client"
import React, { useEffect } from 'react';
import Card from '@/componentes/card/Card';
import * as styles from './page.module.css';
import Header from '@/componentes/header/Header';
import TextControlsExample from '@/componentes/form/Form';


export default function Home() {
return (
    <div>
        <Header/>
            <div className={styles.containerWelcomeItem} >
                <div className={styles.containerText}>
                    <h1>¡Hola! Bienvenido a Online Banking.</h1>
                    <p>Donde tu dinero encuentra un hogar seguro. </p>
                </div>
                <div id={styles.containerImg}>
                    <img src="./fotos/onlineBanking.jpg"  alt="Ilustracion tegnologica" title=''></img>
                </div> 
            </div>
            <Card 
                title='Tarjeta de credito' 
                text='Disfruta de compras convenientes y seguras, beneficios exclusivos y la libertad de gestionar tus gastos segun tus propias necesidades y estilo de vida.' 
                img='./fotos/credito.png'></Card>
            <Card 
                title='Becas' 
                text='Brindamos la oportunidad de acceder a una beca estudiantil que busca impulsar el potencial academico y el crecimiento personal de estudiantes destacados.' 
                img='./fotos/info-img2.png'></Card> 
            <Card 
                title='Pedi tu cuenta negocio' 
                text='GRATIS y 100% online Seas quien seas: Comerciante, Profesional o Trabajador Independiente.' 
                img='./fotos/info-img3.png'></Card> 

            <TextControlsExample/>

            <section id={styles.map}>
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23949906453!2d-58.43329845000001!3d-34.615823750000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1693009067427!5m2!1ses-419!2sar" width="100%" height="500" ></iframe>
            </section>
        </div>
)
}
