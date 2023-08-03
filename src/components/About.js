import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
function About() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image}></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.33 }}
          className={styles.text}
        >
          <p>
            Welcome to Petite Crochetterie, an Edinburgh-based crochet business
            lovingly crafted by a passionate mom. At the heart of the crochet
            creations lies a blend of creativity and inspiration, resulting in
            handcrafted pieces that warm both hearts and homes. With a shared
            love for all things crochet, I embarked on this journey to bring my
            crafty flair to life while cherishing the precious moments of
            motherhood. Each piece is delicately crafted with care, ensuring the
            highest quality and attention to detail. From cozy jumpers and
            whimsical amigurumi to stylish accessories, you are sure to find
            something you will love among these crochet wonders. Whether you're
            searching for a heartfelt gift or a little touch of handmade charm,
            Petite Crochetterie is here to add a touch of magic to your life.
            Join me on this creative journey as I crochet together the threads
            of playfulness and parenthood, creating cherished keepsakes that
            will be treasured for generations to come. Thank you for supporting
            my small business and allowing me to share the artistry of crochet
            with you.
          </p>
        </motion.div>{" "}
      </div>
    </div>
  );
}
export default About;
