import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-menu-close.svg";
import classes from "./NavBar.module.css";
import { useState } from "react";

const NavBar = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={classes.nav}>
        <img src={Logo} className={classes.logo}></img>

        {/* Desktop Links */}

        {/* Mobile Button */}

        <a className={classes.openMenuIcon} onClick={toggleMenu}>
          <img src={IconMenu}></img>
        </a>
      </div>
      {menuOpen && (
        <div className={classes.mobileNavMenu}>
          <a className={classes.closeMenuIcon} onClick={toggleMenu}>
            <img src={IconMenuClose}></img>
          </a>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
      )}

      {children}
    </>
  );
};

export default NavBar;
