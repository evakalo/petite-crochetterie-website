import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import orderDetails from "../styles/OrderDetails.module.css";

const OrderPage = ({
  setOpenModal,
  setCustomer,
  setEmail,
  setAddress,
  setAdditionalInfo,
  orderInfo,
}) => {
  const [filled, setFilled] = useState(false);
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
      setEmail(value);
      setErrorMessage("");
      setButtonDisabled(false);
    } else {
      setErrorMessage(
        "Please enter your email address in format yourname@example.com"
      );
      setButtonDisabled(true);
    }
  };

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "customer":
        setCustomer(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "additional_info":
        setAdditionalInfo(value);
        break;
      default:
        break;
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
    setFilled(true);
  };

  return (
    <div className={orderDetails.wrapper}>
      {!filled ? (
        <form ref={form} className={orderDetails.form}>
          <h3>Fill in your details to complete your order</h3>
          <input
            className={orderDetails.input}
            placeholder="Your Name"
            type="text"
            onChange={(e) => {
              onInputChange(e);
              setButtonDisabled(false);
            }}
            name="customer"
            required
          />
          <input
            className={orderDetails.input}
            placeholder="Your Email"
            onChange={onEmailChange}
            type="email"
            name="user_email"
            required
          />
          <input
            className={orderDetails.input}
            placeholder="Address, Postal Code, City, Country"
            type="text"
            onChange={(e) => {
              onInputChange(e);
              setButtonDisabled(false);
            }}
            name="address"
            required
          />
          <input
            className={orderDetails.input}
            placeholder="Additional information"
            type="text"
            onChange={(e) => {
              onInputChange(e);
              setButtonDisabled(false);
            }}
            name="additional_info"
            required
          />
          <div>
            <button onClick={() => setOpenModal(false)}>Go back</button>
            <button
              type="submit"
              disabled={buttonDisabled}
              onClick={() => {
                setFilled(true);
                console.log(orderInfo);
              }}
            >
              Confirm
            </button>
          </div>
          {errorMessage ? (
            <div className={orderDetails.errorMessage}>{errorMessage}</div>
          ) : (
            ""
          )}
          <h5 style={{ color: "grey" }}>Please fill out all the fields.</h5>
        </form>
      ) : (
        <div className={orderDetails.orderMessage}>
          <h1>Thank you for placing the order!</h1>
          <p>You will be hearing from me soon.</p>
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
        </div>
      )}
    </div>
  );
};

export default OrderPage;
