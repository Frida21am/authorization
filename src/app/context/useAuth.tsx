import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { isAuth, login, logout } = context;

  return { isAuth, login, logout };
};

export default useAuth;
