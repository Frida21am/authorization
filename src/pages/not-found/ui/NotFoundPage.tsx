import { ROUTES } from "@/shared/const/routes";
import BackButton from "@/shared/ui/BackButton/BackButton";
import NotFound from "@/widgets/NotFound/ui/NotFound";

function NotFoundPage() {
  return (
    <div>
      <BackButton link={ROUTES.home} />
      <NotFound />
    </div>
  );
}

export default NotFoundPage;
