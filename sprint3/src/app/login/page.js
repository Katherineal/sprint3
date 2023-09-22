"use client"; // Marca este archivo como un componente de cliente
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/componentes/loginForm/Login'; 
import '@/app/login/login.module.css';


function Login() {
  useEffect(() => {
    if (user.length > 0) {
      Router.push("/home");
    }
  }, []);

  const [user, setUser] =useState([]);
  const Router = useRouter();


  return (
    <div className="App">
      {!user.length > 0 ? <LoginForm setUser={setUser} /> : null}
    </div>
  );
}

export default Login;