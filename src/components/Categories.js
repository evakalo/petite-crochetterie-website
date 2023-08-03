import categoriesStyles from "../styles/Categories.module.css";
import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    {
      name: "Toys(0-3)",
      delay: 0.11,
    },
    {
      name: "Toys(3+)",
      delay: 0.15,
    },
    {
      name: "Home decor",
      delay: 0.19,
    },
    {
      name: "Jewellery",
      delay: 0.23,
    },
    {
      name: "Clothes",
      delay: 0.27,
    },
    {
      name: "Accesories",
      delay: 0.31,
    },
  ];
  const variants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: (0.1 * index) / 3,
      },
    }),
  };

  return (
    <main className={categoriesStyles.main}>
      <div className={categoriesStyles.gallery}>
        {categories.map((item, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{
              borderRadius: "5px",
              opacity: 0.7,
            }}
            className={categoriesStyles.imageContainer}
          >
            <h2>{item.name}</h2>
            <h4>check collection</h4>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
