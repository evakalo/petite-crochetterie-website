"use client";

import { motion } from "framer-motion";
// import { SlArrowRight } from "react-icons/sl"; dodaj ako ces stavljati kategorije u burger bar
import burgerStyles from "../styles/Burger.module.css";
import { LuAlignLeft, LuArrowLeftCircle } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";
const BurgerNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isDropMenuShown, setIsDropMenuShown] = useState(false); //vrati ovo ako ces imati submenu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // const toggleDropdown = (e) => {
  //   e.stopPropagation();
  //   setIsDropMenuShown(!isDropMenuShown); //vrati ovo ako ces imati submenu
  // };
  return (
    <nav
      className={`burgerStyles.wrapper open_sans.className`}
      onClick={toggleMenu}
    >
      {!isMenuOpen && <LuAlignLeft className={burgerStyles.burger} />}

      {isMenuOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{ left: 0, opacity: 0, backgroundColor: "#9f9688" }}
          transition={{ delay: 0.2 }}
          className={burgerStyles.nav}
        >
          <ul>
            <LuArrowLeftCircle className={burgerStyles.arrow} />
            <Link to="/">
              <li className={burgerStyles.underline}>Home</li>
            </Link>
            {/* <li
              className={burgerStyles.dropMenuWrapper}
              // onClick={toggleDropdown} // ako ces opet dodati kategorije
            > */}
            <Link to="/categories">
              <li>Categories </li>
            </Link>
            {/* {isDropMenuShown && (
                <motion.div
                  initial={{
                    left: 0,
                    opacity: 0,
                  }}
                  animate={{
                    left: 100,
                    opacity: 1,
                    backgroundColor: "#9f9688",
                  }}
                  exit={{ left: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className={burgerStyles.dropMenu}
                >
                  <ul>
                    <li>Clothes - adults</li>
                    <li>Clothes - kids</li>
                    <li>Toys (0-3)</li>
                    <li>Toys(3+)</li>
                    <li>Home decor</li>
                    <li>Jewellery</li>
                  </ul>
                </motion.div>
              )}

              <SlArrowRight /> */}
            {/* </li> */}
            <Link to="/about">
              <li className={burgerStyles.underline}>About</li>
            </Link>
            <Link to="/contact">
              <li className={burgerStyles.underline}> Contact</li>
            </Link>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};
export default BurgerNav;
