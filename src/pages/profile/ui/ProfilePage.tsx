import useAuth from "@/app/context/useAuth";
import { ROUTES } from "@/shared/const/routes";
import BackButton from "@/shared/ui/BackButton/BackButton";

function ProfilePage() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <div className="flex justify-between p-10">
        <BackButton link={ROUTES.home} />
        <button
          onClick={handleLogout}
          className="text-2xl font-medium hover:underline underline-offset-8 cursor-pointer"
        >
          Выход
        </button>
      </div>
      <h2 className="text-6xl text-blue-400 text-center font-medium mt-20">
        Страница личного кабинета
      </h2>
    </div>
  );
}
export default ProfilePage;
