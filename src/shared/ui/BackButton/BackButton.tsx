import { Link } from "react-router-dom";

interface BackButtonProps {
  link: string;
}

function BackButton({ link }: BackButtonProps) {
  return (
    <Link
      to={link}
      className="text-2xl font-medium hover:underline underline-offset-8"
    >
      Назад
    </Link>
  );
}

export default BackButton;
