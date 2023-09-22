"use client"
import React, { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/navigation";


const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const router = useRouter();

  const [user, setUser] = useState(null);

  const login = (email, password) => {
    localStorage.setItem(
      "state",
      JSON.stringify({ email: email, password: password })
    );
    setUser({ email: email, password: password });
    return { email: email, password: password };
  };

  const register = (email, password) => {};

  const logout = () => {
    localStorage.removeItem("state");
    setUser(false);
    return true;
  };

  useEffect(() => {
    const unsubscribe = () => {
      console.log("unsuscribe")
      const storage = localStorage.getItem("state");
      if (storage !== null) {
        setUser(JSON.parse(storage));
      } else {
        setUser(false);
      }
    };
    return () => unsubscribe();
  }, []);

  return {
    user,
    login,
    register,
    logout,
    router,
  };
}
