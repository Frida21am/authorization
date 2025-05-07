import { Navigate } from "react-router-dom";
import { ROUTES } from "@/shared/routes";
import { useAuth } from "../context/AuthContext";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuth } = useAuth();

  return isAuth ? <>{children}</> : <Navigate to={ROUTES.login} />;
};

export default PrivateRoute;
