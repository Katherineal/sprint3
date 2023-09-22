
"use client"; // Marca este archivo como un componente de cliente
import React, { useState } from 'react';
import '@/app/registro/registro.module.css';
import RegistrarForm from '@/componentes/loginForm/Registrar';

function RegistroPage() {
  const [userRegistered, setUserRegistered] = useState(false);
  const [user, setUser] = useState(null);

  const handleUserRegistered = (userData) => {
    setUser(userData);
    setUserRegistered(true);
  };

  return (
    <div>
      {userRegistered ? (
        <p>¡El usuario {user && user.nombreUsuario} se ha registrado con éxito!</p>
      ) : (
        <RegistrarForm setUser={setUser} onUserRegistered={handleUserRegistered} /> 
      )}
    </div>
  );
}

export default RegistroPage;

