import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/app/context/AuthContext";
import { ValidationErrors } from "@/shared/constants";
import LoginFormInput from "@/entities/LoginFormInput/LoginFormInput";

export interface LoginFormState {
  email?: string;
  password?: string;
}

function LoginForm() {
  const [formData, setFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormState>({});
  const { setIsAuth } = useAuth();

  const validate = (): boolean => {
    const newErrors: LoginFormState = {};
    if (!formData.email) {
      newErrors.email = ValidationErrors.FILL_IN_EMAIL;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = ValidationErrors.INVALID_EMAIL_FORMAT;
    }
    if (!formData.password) {
      newErrors.password = ValidationErrors.FILL_IN_PASSWORD;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Форма отправлена");
      setIsAuth(true);
    }
  };

  return (
    <section className="w-[700px] mx-auto my-60 px-7 pt-12 pb-10 bg-white rounded-lg shadow-lg border border-solid border-gray-100">
      <h2 className="text-5xl text-blue-400 text-center font-medium mb-3">
        Авторизация
      </h2>
      <p className="text-center text-lg mb-8">Введите ваш логин и пароль</p>
      <form onSubmit={handleSubmit} noValidate aria-describedby="form-errors">
        <LoginFormInput
          label="Email *"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          id="email"
        />
        <LoginFormInput
          label="Пароль *"
          type="password"
          value={formData.password}
          onChange={handleChange}
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
        У вас нет аккаунта?{" "}
        <Link to="#">
          <span className="text-blue-500 hover:underline">Регистрация</span>
        </Link>
      </p>
    </section>
  );
}

export default LoginForm;
