import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from "@/shared/const/routes";

interface GuestRouteProps {
  children: React.ReactNode;
}

function GuestRoute({ children }: GuestRouteProps) {
  const { isAuth } = useAuth();

  return !isAuth ? <>{children}</> : <Navigate to={ROUTES.profile} />;
}

export default GuestRoute;
