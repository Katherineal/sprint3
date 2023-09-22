

"use client"
import React, { useState } from 'react';
import './Login.css';


function RegistrarForm({ setUser }) {
  const [documento, setDocumento] = useState('');
  const [numeroDNI, setNumeroDNI] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(false);

  const handleDocumentoChange = (e) => {
    setDocumento(e.target.value);
  };

  const handleNumeroDNIChange = (e) => {
    setNumeroDNI(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    // Validar los datos y realizar una solicitud al servidor.

    if (documento === '' || numeroDNI === '' || email === '' || usuario === '' || contraseña === '') {
      setError(true);
      return;
    }

    // Aquí puedes enviar los datos al servidor o realizar cualquier acción necesaria
    // Luego, puedes actualizar el estado de usuario para indicar que el usuario ha iniciado sesión
    setUser([usuario]);/* aquí puedes poner los datos del usuario */
  };

  return (
    <main>
<section className='login-section'>
      <h2>Regístrate</h2>
      <h3>Por favor completá todos tus datos</h3>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor="documento">Tipo de Documento:</label>
          <select
            id="documento"
            name="documento"
            value={documento}
            onChange={handleDocumentoChange}
          >
            <option value="Seleccionar">Seleccionar</option>
            <option value="DNI">DNI</option>
            <option value="LC">LC</option>
            <option value="LE">LE</option>
            <option value="CI">CI</option>
            <option value="PASAPORTE">PASAPORTE</option>
            <option value="RENAPER">RENAPER</option>
          </select>

          <label htmlFor="numero-dni">Número de Documento:</label>
          <input
            type="text"
            id="numero-dni"
            name="numero-dni"
            value={numeroDNI}
            onChange={handleNumeroDNIChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={handleUsuarioChange}
            required
          />

          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={contraseña}
            onChange={handleContraseñaChange}
            required
          />


          <button type="submit">Aceptar</button>
        </form>

        {error && <p>* Todos los campos son obligatorios</p>}

        <br />
        <div className='registro-link'>
        <input type="checkbox" id="acepto" name="acepto" required/>
            <a href="components/condicones.jsx" target="_blank">Acepto los términos y condiciones</a>
        </div>
      </div>
    </section>
    </main>
    
  );
}

export default RegistrarForm;