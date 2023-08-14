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

            <Link to="/categories">
              <li>Categories </li>
            </Link>

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
