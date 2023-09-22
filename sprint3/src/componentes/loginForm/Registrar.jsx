"use client"; // Marca este archivo como un componente de cliente
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter desde 'next/router'
import styles from '@/app/registro/registro.module.css';
import Link from 'next/link'

function RegistrarForm({ setUser }) {
  const [documento, setDocumento] = useState('');
  const [numeroDNI, setNumeroDNI] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [checkbox, setCheckbox] = useState('');
  const [error, setError] = useState(false);

  // Utiliza useRouter para la navegación
  const router = useRouter();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (documento === '' || numeroDNI === '' || email === '' || usuario === '' || contraseña === '') {
      setError(true);
      return;
    }

    // Supongamos que aquí tienes una función de registro que envía los datos al servidor
    // y devuelve un resultado de registro exitoso o fallido.
    const registroExitoso = await registrarUsuarioEnElServidor({
      documento,
      numeroDNI,
      email,
      usuario,
      contraseña,
      checkbox,
    });

    if (registroExitoso) {
      // Si el registro fue exitoso, actualiza el estado de autenticación del usuario
      setUser({ nombreUsuario: usuario }); // Asume que setUser toma un objeto de usuario

      // Redirige al usuario a la página de inicio de sesión (Login.jsx)
      router.push('/componentes/loginForm/Login'); // Reemplaza '/login' con la ruta correcta
    } else {
      // Si el registro falló, maneja el error (puedes mostrar un mensaje de error)
      setError(true);
    }
  };

  // Simula una función para registrar al usuario en el servidor
  const registrarUsuarioEnElServidor = async (datosUsuario) => {
    // Aquí puedes agregar lógica para enviar los datos de registro al servidor
    // y devolver true si el registro es exitoso o false si falla
    // Por ahora, simplemente retornamos true como simulación
    return true;
  };




  return (
    <main>
      <section className={styles.loginSection}>
        <h2 className={styles.titleRegistro}>Regístrate</h2>
        <h3 className={styles.subtitleRegistro}>Por favor completá todos tus datos</h3>
        <div className={styles.loginContainer}>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <label htmlFor="documento">Tipo de Documento:</label>
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

            <label htmlFor="numero-dni">Número de Documento:</label>
            <input
              type="text"
              id="numero-dni"
              name="numero-dni"
              value={numeroDNI}
              onChange={handleNumeroDNIChange}
              required
              className={styles.texto} /* Aplica el estilo para texto */
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className={styles.texto} /* Aplica el estilo para texto */
            />

            <label htmlFor="usuario">Usuario:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={usuario}
              onChange={handleUsuarioChange}
              required
              className={styles.texto} /* Aplica el estilo para texto */
            />

            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              value={contraseña}
              onChange={handleContraseñaChange}
              required
              className={styles.texto} /* Aplica el estilo para texto */
            />

            <button id ={styles.buttonAccess} type="submit" className={styles.buttonAccess}>Aceptar</button> {/* Aplica el estilo para el botón */}

          </form>

          {error && <p>* Todos los campos son obligatorios</p>}

          <br />
          <div className={styles.registroLink}>
          <input 
            type="checkbox" 
            id="checkbox" 
            name="checkbox" 
            required 
            />
            
            <Link href="/componentes/condiciones/Condiciones"
              target="_blank">Acepto los términos y condiciones
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RegistrarForm;
