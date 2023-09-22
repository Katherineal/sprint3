'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Header from '@/componentes/header/Header';
import Footer from '@/componentes/footer/Footer';

export default function Tarjetas() {

  const [tarjetas, setTarjetas] = useState([])

  const getTarjetas = () => {
    fetch("./statics/tarjetas.json")
      .then (response => {
        return response.json()
      })
      .then (data => {
        setTarjetas(data)
      })
  }

  useEffect(() => {
    getTarjetas()
  }, []) 
      
  return (

  <div>
    <Header/>
    <section className={styles.mainContent}>
      <article>
        <br />
        <div className='cuentasText'>
          <h2>Hola, Matias Victor Saguir </h2>
        </div>
        <div className={styles.tusCuentas}>
          <h2>Tus Tarjetas</h2>
        </div>
        <div className={styles.contentCuentas}>
          <section className={styles.accountsSection}>
            <ul>
              {tarjetas.map(t =>(
                <li>
                <Link href={`/tarjetas/${t.id}`}>
                 <div className={styles.accountCard}>
                  <div className="accountCardText">
                    <h2>{t.empresa}</h2>
                  <p>{t.numero}</p>
                  <p>{t.nombre}</p>
                  <p>{t.vencimiento}</p>
                  </div>
                 </div>
                </Link>
              </li>
              ))}
              <li>
              </li>
            </ul>
          </section>
          <section>
          </section>
        </div>
      </article>
    </section>
  </div>
    )
  }