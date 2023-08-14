import React from "react";
import navigationStyles from "../styles/Navigation.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MenuItem = ({ text, selected, onClick, linkTo }) => {
  return (
    <div className={navigationStyles.container}>
      <Link to={linkTo}>
        <motion.div
          className={navigationStyles.item}
          onClick={onClick}
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
    </div>
  );
};

export default MenuItem;
