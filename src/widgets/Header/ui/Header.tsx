import { ROUTES } from "@/shared/const/routes";
import MenuLink from "@/shared/ui/MenuLink/MenuLink";

interface MenuLink {
  id: number;
  name: string;
  link: string;
}

const menu: MenuLink[] = [
  {
    id: 1,
    name: "Главная",
    link: ROUTES.home,
  },
  {
    id: 2,
    name: "О нас",
    link: ROUTES.noPage,
  },
  {
    id: 3,
    name: "Контакты",
    link: ROUTES.noPage,
  },
  {
    id: 4,
    name: "Личный кабинет",
    link: ROUTES.profile,
  },
];

function Header() {
  return (
    <nav className="flex justify-end mt-5 mr-10">
      <ul className="flex gap-5">
        {menu.map((el) => (
          <MenuLink key={el.id} name={el.name} link={el.link} />
        ))}
      </ul>
    </nav>
  );
}

export default Header;
