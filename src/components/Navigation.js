import React, { useState } from "react";
import navigationStyles from "../styles/Navigation.module.css";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const menuItems = [
  { text: "Home", linkTo: "/" },
  {
    text: "Categories",
    linkTo: "/categories",

    // dropdownItems: [
    //   { text: "Toys (0-3)", action: "Item 1" },
    //   { text: "Toys(3+)", action: "Item 2" },
    //   { text: "Home decor", action: "Item 3" },
    //   { text: "Clothes kids", action: "Item 4" },
    //   { text: "Clothes adults", action: "Item 5" },
    //   { text: "Accessories", action: "Item 6" },
    // ],
  },
  { text: "About", linkTo: "/about" },
  { text: "Contact", linkTo: "/contact" },
];

const UnderlinedMenu = () => {
  const [selected, setSelected] = useState(0);

  const handleDropdownItemClick = (action) => {
    // Implement the logic for handling the dropdown item click here.
    console.log("Dropdown item clicked:", action);
  };

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
