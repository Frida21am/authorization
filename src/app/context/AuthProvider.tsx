import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
