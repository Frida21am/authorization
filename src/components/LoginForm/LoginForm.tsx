import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <section className="w-[700px] mx-auto my-60 px-7 pt-12 pb-10 bg-white rounded-lg shadow-lg border-solid border-gray-100">
      <h2 className="text-5xl text-blue-400 text-center font-medium mb-3">
        Авторизация
      </h2>
      <p className="text-center text-lg mb-8">Введите ваш логин и пароль</p>
      <form>
        <div className="mb-5">
          <input
            type="email"
            id="email"
            placeholder="Введите ваш email"
            className="mt-1 block w-full p-5 border-solid border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-8">
          <input
            type="password"
            id="password"
            placeholder="Введите ваш пароль"
            className="mt-1 block w-full p-5 border-solid border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
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
