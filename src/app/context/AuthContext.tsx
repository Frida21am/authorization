import { createContext } from "react";

export interface AuthContextType {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
