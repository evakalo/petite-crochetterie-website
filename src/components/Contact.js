import contactStyles from "../styles/Contact.module.css";
// import { useState } from "react";
const Contact = () => {
  // const [message, setMessage] = useState();
  return (
    <div className={contactStyles.wrapper}>
      <img
        src="../../images/fox-big.jpg"
        alt="lalla"
        className={contactStyles.image}
      />
      <form className={contactStyles.form}>
        <h3>Item you like is out of stock?</h3>
        <h2>Contact me </h2>
        <input
          className={contactStyles.input}
          placeholder="Your Name"
        ></input>{" "}
        <input className={contactStyles.input} placeholder="Your Email"></input>{" "}
        <textarea
          className={contactStyles.text}
          placeholder="Your Message"
          rows="5"
        ></textarea>{" "}
        <button>Send</button>
      </form>
    </div>
  );
};
export default Contact;
