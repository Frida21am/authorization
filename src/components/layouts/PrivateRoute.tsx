import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { ROUTES } from "@/shared/routes";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuth } = useAuth();

  return isAuth ? <>{children}</> : <Navigate to={ROUTES.login} />;
};

export default PrivateRoute;
