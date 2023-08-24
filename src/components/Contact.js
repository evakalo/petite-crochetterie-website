import contactStyles from "../styles/Contact.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [message, setMessage] = useState(false);

  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function isEmailValid(email) {
    const emailFormat =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.trim() !== "" && email.match(emailFormat);
  }
  const onEmailChange = (e) => {
    const value = e.target.value;
    const validEmail = isEmailValid(value);
    if (validEmail) {
      setEmail(e.target.value);
      console.log("Točan format emaila");
      console.log(email);
      setErrorMessage("");
      setButtonDisabled(false);
    } else {
      setErrorMessage(
        "Please enter your email adress in format yourname@example.com"
      );
      setButtonDisabled(true);
    }
  };
  const onInputsChange = (e) => {
    const input = e.target.value;
    if (input !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "template_rp1x8w4",
        form.current,
        "s7qmKosCTE-Re7NJA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage(true);
  };
  return (
    <div className={contactStyles.wrapper}>
      <img
        src="../../images/fox-big.jpg"
        alt=" toy fox in a box with envelopes"
        className={contactStyles.image}
      />
      {message === false ? (
        <form ref={form} onSubmit={sendEmail} className={contactStyles.form}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.17 }}
          >
            Got questions about a particular item or custom order?
          </motion.h3>
          <p>
            Drop me a line below, and I’ll get back to you as soon as possible!
          </p>
          <h2>Contact me </h2>
          <input
            className={contactStyles.input}
            placeholder="Your Name"
            type="text"
            onChange={onInputsChange}
            name="user_name"
            required
          ></input>{" "}
          <input
            className={contactStyles.input}
            placeholder="Your Email"
            onChange={onEmailChange}
            type="email"
            name="user_email"
            required
          ></input>{" "}
          <input
            className={contactStyles.input}
            placeholder="Subject"
            type="text"
            onChange={onInputsChange}
            name="subject"
            required
          ></input>{" "}
          <textarea
            className={contactStyles.text}
            placeholder="Your Message"
            type="text"
            onChange={onInputsChange}
            name="message"
            required
            rows="5"
          ></textarea>{" "}
          <button type="submit" disabled={buttonDisabled}>
            Send
          </button>
          {errorMessage ? (
            <div className={contactStyles.errorMessage}>{errorMessage}</div>
          ) : (
            ""
          )}
          <h5
            style={{
              color: "grey",
            }}
          >
            Please fill out all the fields.
          </h5>
        </form>
      ) : (
        <motion.div
          className={contactStyles.message}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.33 }}
        >
          <h1>Thank you !</h1>
          <p>You will be hearing from me soon. </p>
          <p>In the meantime, check out the collection.</p>
          <button>
            <Link
              to="/categories"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Explore categories
            </Link>
          </button>
        </motion.div>
      )}
    </div>
  );
};
export default Contact;
