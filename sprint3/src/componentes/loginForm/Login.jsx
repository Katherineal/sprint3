"use client" // Marca este archivo como un componente de cliente

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/helpers/auth-provider';
import styles from '@/app/login/login.module.css';
import Link from 'next/link';


function LoginForm({ setUser }) {
  const [passwordRequirements, setPasswordRequirements] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  const [documento, setDocumento] = useState('');
  const [numeroDNI, setNumeroDNI] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(false);

  const handleDocumentoChange = (e) => {
    setDocumento(e.target.value);
  };

  const handleNumeroDNIChange = (e) => {
    setNumeroDNI(e.target.value);
  };

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
    setPasswordRequirements(false);
    setError(false); // Oculta la alerta de error cuando el usuario empiece a escribir en el campo de contraseña
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (documento === '' || numeroDNI === '' || usuario === '') {
      setError(true);
      return;
    }
  
     // Validación de la contraseña
     const passwordRegex = /^(?=.*[A-Z])(?=.*\d{4})(?!.*[\W_])(.{8,15})$/;

     if (!passwordRegex.test(contraseña)) {
       setError(true);
       setPasswordRequirements(true); // Mostrar requisitos incorrectos
       return;
     }
 
  
    // Aquí puedes enviar los datos al servidor o realizar cualquier acción necesaria
    // Luego, puedes actualizar el estado de usuario para indicar que el usuario ha iniciado sesión
  
    // Autenticación (puedes utilizar tu método de autenticación aquí)
    const isAuthenticated = await auth.login(usuario, contraseña);
  
    if (isAuthenticated) {
      setUser([usuario]);
      router.push('/home');
    } else {
      setError(true); // Maneja el error de autenticación aquí
    }
  };


  useEffect(() => {
    // Agregar un controlador de eventos para hacer clic en el cuerpo del documento
    const handleBodyClick = () => {
      setError(false); // Oculta la alerta de error al hacer clic en cualquier lugar del cuerpo del documento
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      // Eliminar el controlador de eventos al desmontar el componente
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);


  return (
    <main>
      <section className={styles.loginSection}>
        <h2 className={styles.titleLogin}>Iniciar Sesión</h2>
        <div className={styles.loginContainer}>
       
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <label className={styles.label}htmlFor="documento">Tipo de Documento:</label>
            <select
              className={styles.seleccionar}
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

            <label className={styles.label} htmlFor="numero-dni">Número de Documento:</label>
            <input
              className={styles.texto}
              type="text"
              id="numero-dni"
              name="numero-dni"
              value={numeroDNI}
              onChange={handleNumeroDNIChange}
              required
            />

            <label className={styles.label} htmlFor="usuario">Usuario:</label>
            <input
              className={styles.texto}
              type="text"
              id="usuario"
              name="usuario"
              value={usuario}
              onChange={handleUsuarioChange}
              required
            />

            <label className={styles.label} htmlFor="contraseña">Contraseña:</label>
            <input
              className={styles.texto}
              type="password"
              id="contraseña"
              name="contraseña"
              value={contraseña}
              onChange={handleContraseñaChange}
              required
            />

            {passwordRequirements && (
            <ul className={`${styles.passwordRequirements} ${styles.redText}`}>
            <li>La contraseña debe tener al menos 8 y máximo 15 caracteres.</li>
            <li>Debe incluir al menos una letra mayúscula (A-Z).</li>
            <li>Debe incluir al menos una letra minúscula (a-z).</li>
            <li>Debe contener cuatro dígitos (0-9).</li>
            <li>No debe contener caracteres especiales (!#%,.&).</li>
            </ul>
            )}

            <button id ={styles.buttonAccess} type="submit">Ingresar</button>
          </form>
         

          {error && (
            <p className={styles.passwordRequirements}>* Todos los campos son obligatorios o hubo un error de autenticación. Asegúrese de que la contraseña cumpla con los requisitos especificados.</p>
          )}



          <br />
          <div className={styles.registroLink}>
            ¿No tienes una cuenta? <Link href="#" target="_blank">Regístrate</Link>
          </div>
          <div className={styles.olvideLink}>
            <Link href="#">Olvidé mi contraseña o usuario</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginForm;



