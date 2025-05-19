import { Navigate } from "react-router-dom";
import { ROUTES } from "@/shared/const/routes";
import useAuth from "../context/useAuth";

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuth } = useAuth();

  return isAuth ? <>{children}</> : <Navigate to={ROUTES.login} />;
}

export default PrivateRoute;
