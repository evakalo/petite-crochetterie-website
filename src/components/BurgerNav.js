"use client";

import { motion } from "framer-motion";
import { SlArrowRight } from "react-icons/sl";
import burgerStyles from "../styles/Burger.module.css";
import { LuAlignLeft, LuArrowLeftCircle } from "react-icons/lu";
import { useState } from "react";

const BurgerNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropMenuShown, setIsDropMenuShown] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropMenuShown(!isDropMenuShown);
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
            <li>
              <a href="/" className={burgerStyles.underline}>
                Home
              </a>
            </li>
            <li
              className={burgerStyles.dropMenuWrapper}
              onClick={toggleDropdown}
            >
              <p>Categories </p>
              {isDropMenuShown && (
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

              <SlArrowRight />
            </li>
            <li>
              <a href="/about" className={burgerStyles.underline}>
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={toggleMenu}
                className={burgerStyles.underline}
              >
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};
export default BurgerNav;
