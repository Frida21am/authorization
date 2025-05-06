import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProfilePage() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
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
      <h2 className="text-6xl text-blue-400 text-center font-medium mt-20">
        Страница личного кабинета
      </h2>
    </div>
  );
}
export default ProfilePage;
