import categoriesStyles from "../styles/Categories.module.css";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <main className={categoriesStyles.main}>
      <div className={categoriesStyles.gallery}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.11 }}
          className={categoriesStyles.imageContainer}
        >
          <h2>Toys (0-3 )</h2>
          <h4>check collection</h4>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.15 }}
          className={categoriesStyles.imageContainer}
        >
          <h2>Toys (3+)</h2>
          <h4>check collection</h4>
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.25 }}
          className={categoriesStyles.imageContainer}
        >
          <h2>Home decor</h2>
          <h4>check collection</h4>
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.25 }}
          className={categoriesStyles.imageContainer}
        >
          <h2>Jewellery</h2>
          <h4>check collection</h4>
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.25 }}
          className={categoriesStyles.imageContainer}
        >
          <h2>Clothes</h2>
          <h4>check collection</h4>
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.25 }}
          className={categoriesStyles.imageContainer}
        >
          <h2>Accessories</h2>
          <h4>check collection</h4>
        </motion.div>{" "}
      </div>
    </main>
  );
}
