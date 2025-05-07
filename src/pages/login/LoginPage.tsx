import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/routes";
import LoginForm from "@/widgets/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div>
      <div className="mt-5 ml-10">
        <Link
          to={ROUTES.home}
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
