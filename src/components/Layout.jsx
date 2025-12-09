import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";

const Layout = () => {
  return (
    <NavBar>
      <main>
        <Outlet></Outlet>
      </main>
    </NavBar>
  );
};

export default Layout;
