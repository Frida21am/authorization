import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

interface LoginPageProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

function LoginPage({ isAuthenticated, setIsAuthenticated }: LoginPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <div className="mt-5 ml-10">
        <Link
          to="/"
          className="text-3xl font-medium hover:underline underline-offset-8"
        >
          Назад
        </Link>
      </div>
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default LoginPage;
