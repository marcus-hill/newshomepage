import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { useNavBarStore } from "../store/useNavBarStore.jsx";
import classes from "./Layout.module.css";
import clsx from "clsx";

const Layout = () => {
  const navBarOpen = useNavBarStore((s) => s.navBarOpen);
  return (
    <NavBar>
      <main className={classes.main}>
        <div className={clsx(classes.content, navBarOpen && classes.mainNavOpen)}>
          <Outlet></Outlet>
        </div>
      </main>
    </NavBar>
  );
};

export default Layout;
