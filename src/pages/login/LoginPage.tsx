import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  }, [isAuth, navigate]);

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
      <LoginForm />
    </div>
  );
}

export default LoginPage;
