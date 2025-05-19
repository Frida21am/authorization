import { Navigate } from "react-router-dom";
import { ROUTES } from "@/shared/const/routes";
import useAuth from "../context/useAuth";

interface GuestRouteProps {
  children: React.ReactNode;
}

function GuestRoute({ children }: GuestRouteProps) {
  const { isAuth } = useAuth();

  return !isAuth ? <>{children}</> : <Navigate to={ROUTES.profile} />;
}

export default GuestRoute;
