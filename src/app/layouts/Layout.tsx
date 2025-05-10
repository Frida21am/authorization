import { Outlet } from "react-router-dom";
import Header from "@/widgets/Header/ui/Header";

function Layout() {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
