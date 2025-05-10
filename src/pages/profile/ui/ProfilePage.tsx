import { ROUTES } from "@/shared/const/routes";
import BackButton from "@/shared/ui/BackButton/BackButton";

function ProfilePage() {
  return (
    <div>
      <BackButton link={ROUTES.home} />
      <h2 className="text-6xl text-blue-400 text-center font-medium mt-20">
        Страница личного кабинета
      </h2>
    </div>
  );
}
export default ProfilePage;
