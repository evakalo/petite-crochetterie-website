import React, { useState } from "react";
import navigationStyles from "../styles/Navigation.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MenuItem = ({ text, selected, onClick, dropdownItems, linkTo }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleMenuItemClick = () => {
    if (dropdownItems) {
      setShowDropdown(!showDropdown);
    } else {
      setShowDropdown(false);
      onClick();
    }
  };

  const handleDropdownItemClick = (action) => {
    // Implement the logic for handling the dropdown item click here.
    console.log("Dropdown item clicked:", action);
    setShowDropdown(false);
  };

  return (
    <div className={navigationStyles.container}>
      <Link to={linkTo}>
        <motion.div
          className={navigationStyles.item}
          onClick={handleMenuItemClick}
          animate={{ opacity: selected ? 1 : 0.7 }}
        >
          {text}
          {selected && (
            <motion.div
              className={navigationStyles.underline}
              layoutId="underline"
            />
          )}
        </motion.div>
      </Link>
      {selected && showDropdown && dropdownItems && (
        <div className={navigationStyles.dropdown}>
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className={navigationStyles.dropdownItem}
              onClick={() => handleDropdownItemClick(item.action)}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
