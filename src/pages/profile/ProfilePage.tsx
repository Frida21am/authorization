import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/routes";

function ProfilePage() {
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
      <h2 className="text-6xl text-blue-400 text-center font-medium mt-20">
        Страница личного кабинета
      </h2>
    </div>
  );
}
export default ProfilePage;
