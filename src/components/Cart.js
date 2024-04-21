import React, { useRef } from "react";
import cartStyles from "../styles/Cart.module.css";
import { useState } from "react";
const Cart = ({
  cartItems,
  totalPrice,
  handleChange,
  handleSubmit,
  setOpenModal,
}) => {
  const [customer, setCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [filled, setFilled] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function isEmailValid(email) {
    const emailFormat =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.trim() !== "" && email.match(emailFormat);
  }
  const form = useRef();

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

  return (
    <div className={cartStyles.cartContainer}>
      <div className={cartStyles.itemsContainer}>
        {" "}
        <h2>Shopping Cart</h2>
        {cartItems.map((item, index) => (
          <div className={cartStyles.itemContainer} key={index}>
            <img
              src={item.image}
              alt={item.name}
              className={cartStyles.itemImage}
            />
            <div className={cartStyles.itemDetails}>
              <h4>{item.name}</h4>
              {item.piece1Quantity > 0 ? <h5>{item.piece1}</h5> : ""}
              {item.piece2Quantity > 0 ? <h5>{item.piece2}</h5> : ""}
              <h5>Price: {item.price}£</h5>
            </div>
          </div>
        ))}{" "}
        <div className={cartStyles.totalPrice}>
          <h3>Total Price: {totalPrice}£</h3>
        </div>
      </div>
      <form ref={form} className={cartStyles.userForm}>
        <h3>Fill in your details to complete your order</h3>
        <input
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
          placeholder="Your Email"
          onChange={onEmailChange}
          type="email"
          name="user_email"
          required
        />
        <input
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
          <button
            type="submit"
            disabled={buttonDisabled}
            onClick={() => {
              setFilled(true);
            }}
          >
            Confirm
          </button>
        </div>
        {errorMessage ? (
          <div className={cartStyles.errorMessage}>{errorMessage}</div>
        ) : (
          ""
        )}
        <h5 style={{ color: "grey" }}>
          Please fill out all the fields. Next step will take you to paypal
          form.
        </h5>
      </form>

      <button
        className={cartStyles.closeButton}
        onClick={() => setOpenModal(false)}
      >
        X
      </button>
    </div>
  );
};

export default Cart;
