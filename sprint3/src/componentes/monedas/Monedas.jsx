"use client"
import "./Monedas.css"
import React, {useEffect, useState} from 'react';
import axios from 'axios';



function Monedas({monedaA, monedaDe, cantidad}) {
    const [monedas, setMonedas] = useState({});
    const [tasaCambio, setTasaCambio] = useState(null);
    const [resultado, setResultado] = useState(null);

    useEffect(() => {
        if(monedaDe && monedaA){
            axios
            .get(`https://v6.exchangerate-api.com/v6/3a3e587115e61293334a9584/latest/${monedaDe}`)
            .then(response => {
                setMonedas(response.data);
                const tasa = response.data.conversion_rates[monedaA];
                console.log(tasa)
                setTasaCambio(tasa);


                const conversion = cantidad * tasa;
                setResultado(conversion)
            })
            .catch(error => {
                // Aquí puedes manejar errores en la solicitud
                console.error(error);
            });
        }   
        }, [monedaDe, monedaA, cantidad]);
    return (
        <div className="Monedas">
            <p className="negrita">Conversion de:  </p><p className="datos">{monedaDe} a {monedaA}</p>
            <p className="negrita">Tasa de cambio: </p><p className="datos">{tasaCambio}</p>
            <p className="negrita">Resultado: </p><p className="datos">{resultado}</p>
        </div>
    )
}

export default Monedas;