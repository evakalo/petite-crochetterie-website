import navStyles from "../styles/Nav.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div className={navStyles.navList}>
      <a href="/" className={navStyles.link}>
        HOME
      </a>
      <div
        className={navStyles.navDiv}
        onMouseEnter={() => setIsMenuShown(true)}
        onMouseLeave={() => setIsMenuShown(false)}
      >
        <a href="/">CATEGORIES</a>
        {isMenuShown && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{ height: 200, opacity: 1 }}
            exit={{ height: 0 }}
            transition={{ delay: 0 }}
            className={navStyles.dropdownMenu}
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
      </div>
      <a href="/about" className={navStyles.link}>
        ABOUT
      </a>
      <a href="/contact" className={navStyles.link}>
        CONTACT
      </a>{" "}
    </div>
  );
};
export default Nav;
