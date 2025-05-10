import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from "@/shared/const/routes";

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuth } = useAuth();

  return isAuth ? <>{children}</> : <Navigate to={ROUTES.login} />;
}

export default PrivateRoute;
