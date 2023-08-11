import categoriesStyles from "../styles/Categories.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Categories() {
  const categories = [
    {
      name: "Toys(0-3)",
      link: "toys(0-3)",
    },
    {
      name: "Toys(3+)",
      link: "toys(3+)",
    },
    {
      name: "Home decor",
      link: "/decor",
    },
    {
      name: "Jewellery",
      link: "/jewellery",
    },
    {
      name: "Clothes",
      link: "/clothes",
    },
    {
      name: "Accesories",
      link: "/accessories",
    },
  ];
  //add fadein effect with different delay times
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
        {categories.map((item, index, link) => (
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
            {" "}
            <Link to={item.link}>
              <div className={categoriesStyles.title}>
                <h2>{item.name}</h2>
                <h4>check collection</h4>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
