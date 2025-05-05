import { Link } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validate = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = "Необходимо заполнить «Email»";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Неверный формат email";
    }
    if (!password) {
      newErrors.password = "Необходимо заполнить «Пароль»";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Форма отправлена");
    }
  };
  return (
    <section className="w-[700px] mx-auto my-60 px-7 pt-12 pb-10 bg-white rounded-lg shadow-lg border-solid border-gray-100">
      <h2 className="text-5xl text-blue-400 text-center font-medium mb-3">
        Авторизация
      </h2>
      <p className="text-center text-lg mb-8">Введите ваш логин и пароль</p>
      <form onSubmit={handleSubmit} noValidate aria-describedby="form-errors">
        <div className="mb-5">
          <label htmlFor="email" className="text-lg">
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full p-5 border-solid border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            value={email}
            placeholder="Введите email"
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <span
              id="email-error"
              role="alert"
              className="text-red-600 inline-block mt-1"
            >
              {errors.email}
            </span>
          )}
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="text-lg">
            Пароль *
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full p-5 border-solid border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            value={password}
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby={errors.password ? "password-error" : undefined}
            required
          />
          {errors.password && (
            <span
              id="password-error"
              role="alert"
              className="text-red-600 inline-block mt-1"
            >
              {errors.password}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-5 rounded-md hover:bg-blue-700 transition duration-200"
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
