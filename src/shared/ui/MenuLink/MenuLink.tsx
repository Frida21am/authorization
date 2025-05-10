import { Link } from "react-router-dom";

interface MenuLinkProps {
  name: string;
  link: string;
}

function MenuLink({ name, link }: MenuLinkProps) {
  return (
    <li>
      <Link
        to={link}
        className="text-2xl text-blue-950 font-medium hover:underline underline-offset-8"
      >
        {name}
      </Link>
    </li>
  );
}

export default MenuLink;
