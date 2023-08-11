import React, { useState } from "react";
import navigationStyles from "../styles/Navigation.module.css";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const menuItems = [
  { text: "Home", linkTo: "/" },
  {
    text: "Categories",
    linkTo: "/categories",
  },
  { text: "About", linkTo: "/about" },
  { text: "Contact", linkTo: "/contact" },
];

const UnderlinedMenu = () => {
  const [selected, setSelected] = useState(0);

  return (
    <motion.div className={navigationStyles.wrapper}>
      {menuItems.map((item, i) => (
        <MenuItem
          text={item.text}
          key={i}
          selected={selected === i}
          onClick={() => setSelected(i)}
          dropdownItems={item.dropdownItems}
          linkTo={item.linkTo}
        />
      ))}
    </motion.div>
  );
};

export default UnderlinedMenu;
