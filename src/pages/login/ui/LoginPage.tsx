import { ROUTES } from "@/shared/const/routes";
import BackButton from "@/shared/ui/BackButton/BackButton";
import LoginForm from "@/widgets/LoginForm/ui/LoginForm";

function LoginPage() {
  return (
    <div>
      <BackButton link={ROUTES.home} />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
