import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-menu-close.svg";
import classes from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavBarStore } from "../store/useNavBarStore.jsx";

const NavBar = ({ children }) => {
  const { toggleNavBarOpen } = useNavBarStore();

  const toggleMenu = () => {
    toggleNavBarOpen();
  };

  return (
    <>
      <div className={classes.nav}>
        <img src={Logo} className={classes.logo}></img>

        <nav className={classes.desktopLinks}>
          <ul>
            <li>
              <Link className={classes.desktopLink} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={classes.desktopLink} to="/">
                New
              </Link>
            </li>

            <li>
              <Link className={classes.desktopLink} to="/">
                Popular
              </Link>
            </li>

            <li>
              <Link className={classes.desktopLink} to="/">
                Trending
              </Link>
            </li>

            <li>
              <Link className={classes.desktopLink} to="/">
                Categories
              </Link>
            </li>
          </ul>
        </nav>

        <a className={classes.openMenuIcon} onClick={toggleMenu} aria-label="Open Nav Menu">
          <img src={IconMenu}></img>
        </a>
      </div>

      {useNavBarStore((state) => state.navBarOpen) && (
        <div className={classes.mobileNavMenu}>
          <a className={classes.closeMenuIcon} onClick={toggleMenu} aria-label="Close Nav Menu">
            <img src={IconMenuClose}></img>
          </a>
          <div className={classes.links}>
            <Link className={classes.link} to="/">
              Home
            </Link>
            <Link className={classes.link} to="/">
              New
            </Link>
            <Link className={classes.link} to="/">
              Popular
            </Link>
            <Link className={classes.link} to="/">
              Trending
            </Link>
            <Link className={classes.link} to="/">
              Categories
            </Link>
          </div>
        </div>
      )}

      {children}
    </>
  );
};

export default NavBar;
