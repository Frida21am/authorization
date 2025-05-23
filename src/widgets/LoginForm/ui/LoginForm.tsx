import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import LoginFormInput from "@/shared/ui/LoginFormInput/LoginFormInput";
import useAuth from "@/app/context/useAuth";
import { loginUser } from "../api/authApi";
import { validateForm } from "@/features/ValidateForm";

export interface LoginFormState {
  email?: string;
  password?: string;
}
function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<
    Partial<{ email: string; password: string }>
  >({});

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await loginUser(formData.email!, formData.password!);
        const token = response.token;
        login(token);
      } catch (error) {
        const errorMessage = (error as Error).message || "Произошла ошибка";
        alert(errorMessage);
      }
    }
  };

  return (
    <section className="w-[700px] mx-auto my-30 px-7 pt-12 pb-10 bg-white rounded-lg shadow-lg border border-solid border-gray-100">
      <h2 className="text-5xl text-blue-400 text-center font-medium mb-3">
        Авторизация
      </h2>
      <p className="text-center text-lg mb-8">Введите ваш логин и пароль</p>
      <form onSubmit={handleSubmit} noValidate aria-describedby="form-errors">
        <LoginFormInput
          label="Email *"
          type="email"
          ref={emailRef}
          error={errors.email}
          id="email"
        />
        <LoginFormInput
          label="Пароль *"
          type="password"
          ref={passwordRef}
          error={errors.password}
          id="password"
        />
        <button
          type="submit"
          className="mt-2 py-5 w-full bg-blue-600 text-white cursor-pointer rounded-md hover:bg-blue-700 transition duration-200"
        >
          Войти
        </button>
      </form>
      <p className="mt-4 text-center">
        У вас нет аккаунта?
        <Link to="#">
          <span className="text-blue-500 hover:underline"> Регистрация</span>
        </Link>
      </p>
    </section>
  );
}

export default LoginForm;
