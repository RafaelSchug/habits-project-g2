import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || false
  );

  useEffect(() => {
    if (token) {
      setIsAuth(true);
    }
  }, [token]);

  const writeToken = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, token, writeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
