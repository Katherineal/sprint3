'use client'
import { useState, useEffect } from "react"
import styles from './page.module.css';
import Header from "@/componentes/header/Header";

export default function Tarjeta({params}) {
    const {tarjetasId} = params
    const[tarjeta, setTarjeta] = useState({})

    const getTarjeta = () => {
        fetch(`/statics/tarjetas/${tarjetasId}.json`)
        .then (response => {
          return response.json()
          })
        .then (data => {
          setTarjeta(data)
        })
    }

    useEffect(() => {
      getTarjeta()
    }, [tarjetasId]) 

    return (
<div>
    <Header/>
      <section className={styles.mainContent}>
        <article>
          <br />
          <div className='cuentasText'>
          </div>
          <div className={styles.tusCuentas}>
            <h2>Datos</h2>
          </div>
          <div className={styles.contentCuentas}>
            <section className={styles.accountsSection}>
            <div className="Tarjeta">
              <h2>Tarjeta</h2>
              <ul>
                <li>
                    Empresa:{tarjeta.empresa}
                </li>
                <li>
                    Numero: {tarjeta.numero}
                </li>
                <li>
                    Nombre: {tarjeta.nombre}
                </li>
                <li>
                    Vencimiento: {tarjeta.vencimiento}
                </li>
                <li>
                    Disponible: {tarjeta.disponible}
                </li>
              </ul>
          </div>
            </section>
            <section>
            </section>
          </div>
        </article>
    </section>
</div>
    );
  }