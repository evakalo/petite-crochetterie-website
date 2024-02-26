import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import navigationStyles from "../styles/Navigation.module.css";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const menuItems = [
  { text: "Home", linkTo: "/" },
  {
    text: "Gallery",
    linkTo: "/categories",
  },
  { text: "About", linkTo: "/about" },
  { text: "Contact", linkTo: "/contact" },
];

const UnderlinedMenu = () => {
  const [selected, setSelected] = useState(0);
  const location = useLocation();
  //when the pathname changes, find the index of the linkTo property that matches the pathname
  useEffect(() => {
    // Find the index of the menu item that matches the current location
    const selectedIndex = menuItems.findIndex(
      (item) => item.linkTo === location.pathname
    );

    if (selectedIndex !== -1) {
      setSelected(selectedIndex);
      window.scrollTo(0, 0);
    } else {
      setSelected(-1); // No match found
    }
  }, [location.pathname]);

  return (
    <motion.div className={navigationStyles.wrapper}>
      {menuItems.map((item, i) => (
        <MenuItem
          text={item.text}
          key={i}
          selected={selected === i}
          onClick={() => setSelected(i)}
          linkTo={item.linkTo}
        />
      ))}
    </motion.div>
  );
};

export default UnderlinedMenu;
