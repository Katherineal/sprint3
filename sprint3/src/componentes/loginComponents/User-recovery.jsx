
"use client"

import React, { useState } from 'react';
import './Login.css';

function RecuperarForm({ setUser }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    // Validar los datos y realizar una solicitud al servidor.

    if (email === '') {
      setError(true);
      return;
    }

    // Aquí puedes enviar los datos al servidor o realizar cualquier acción necesaria
    // Luego, puedes actualizar el estado de usuario para indicar que el usuario ha iniciado sesión
    setUser([email]);/* aquí puedes poner los datos del usuario */
  };

  return (
    <main>
 <section className='login-section'>
      <h2>Recuperación de usuario</h2>
      <h3>Olvidé o bloqueé mi Usuario / Clave Digital</h3>
      <p>Por favor, proporciona tu dirección de correo electrónico <br/>
         o usuario para recuperar tu cuenta.</p>

      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>

          <label htmlFor="email">Email o Usuario:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />


          <button type="submit">Aceptar</button>
        </form>

      </div>
    </section>
    </main>
   
  );
}

export default RecuperarForm;