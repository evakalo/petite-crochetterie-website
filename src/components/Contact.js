import contactStyles from "../styles/Contact.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Contact = () => {
  const [message, setMessage] = useState(false);
  return (
    <div className={contactStyles.wrapper}>
      <motion.img
        src="../../images/fox-big.jpg"
        alt="lalla"
        className={contactStyles.image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
      />
      {message === false ? (
        <form className={contactStyles.form}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.17 }}
          >
            Item you like is out of stock?
          </motion.h3>
          <h2>Contact me </h2>
          <input
            className={contactStyles.input}
            placeholder="Your Name"
          ></input>{" "}
          <input
            className={contactStyles.input}
            placeholder="Your Email"
          ></input>{" "}
          <textarea
            className={contactStyles.text}
            placeholder="Your Message"
            rows="5"
          ></textarea>{" "}
          <button onClick={() => setMessage(true)}>Send</button>
        </form>
      ) : (
        <motion.div
          className={contactStyles.message}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.33 }}
        >
          <h1>Thank you!</h1>
          <p>You will be hearing from me soon. </p>
          <p>In the meantime, check out the collection.</p>
          <button>
            <Link to="/categories">Explore categories</Link>
          </button>
        </motion.div>
      )}
    </div>
  );
};
export default Contact;
