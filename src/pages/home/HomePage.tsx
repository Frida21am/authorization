import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/routes";

function HomePage() {
  return (
    <div className="wrapper">
      <header>
        <nav className="flex justify-end mt-5 mr-10">
          <Link
            to={ROUTES.profile}
            className="text-3xl font-medium hover:underline underline-offset-8"
          >
            Личный кабинет
          </Link>
        </nav>
        <h1 className="text-6xl text-blue-400 text-center font-medium mt-20">
          Главная
        </h1>
      </header>
    </div>
  );
}

export default HomePage;
