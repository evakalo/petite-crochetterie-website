import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderPage from "./OrderPage";
import detailsStyles from "../styles/Details.module.css";
import Cart from "./Cart";
import { BsCart4 } from "react-icons/bs";
const Details = () => {
  const location = useLocation();
  const { src, alt, name, price, piece1, piece2 } = location.state;
  const [mainItemQuantity, setMainItemQuantity] = useState(1);
  const [extraItem1Quantity, setExtraItem1Quantity] = useState(0);
  const [extraItem2Quantity, setExtraItem2Quantity] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [colorInput, setColorInput] = useState("");
  const [specialRequestsInput, setSpecialRequestsInput] = useState("");
  const [orderInfo, setOrderInfo] = useState({});
  const [customer, setCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [cart, setCart] = useState(() => {
    // getting stored value of the cart
    const cart = localStorage.getItem("cart");
    const initialValue = JSON.parse(cart);
    return initialValue || "";
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    console.log(storedCart);
  }, []); // Only run once on component mount

  // Save cart data to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setOrderInfo({
      item_name: name,
      main_item_quantity: mainItemQuantity,
      first_accessory: piece1?.name || "",
      first_accessory_quantity: extraItem1Quantity,
      second_accessory: piece2?.name || "",
      second_accessory_quantity: extraItem2Quantity,
      special_requests: specialRequestsInput,
      colour_requests: colorInput,
      customer_name: customer,
      customer_email: email,
      customer_address: address,
      customer_additional_info: additionalInfo,
    });
  }, [
    mainItemQuantity,
    extraItem1Quantity,
    extraItem2Quantity,
    specialRequestsInput,
    colorInput,
    name,
    piece1,
    piece2,
    customer,
    email,
    address,
    additionalInfo,
  ]);
  const calculateTotalPrice = () => {
    let totalPrice = price * mainItemQuantity;

    if (piece1 && piece1.price) {
      totalPrice += piece1.price * extraItem1Quantity;
    }

    if (piece2 && piece2.price) {
      totalPrice += piece2.price * extraItem2Quantity;
    }

    return totalPrice;
  };

  const handleQuantityChange = (quantity) => {
    if (quantity >= 1) {
      setMainItemQuantity(quantity);
    }
  };

  const handleExtraItemQuantityChange = (item, quantity) => {
    if (quantity >= 0) {
      switch (item) {
        case "piece1":
          setExtraItem1Quantity(quantity);
          break;
        case "piece2":
          setExtraItem2Quantity(quantity);
          break;
        default:
          break;
      }
    }
  };

  const handleColorInputChange = (event) => {
    setColorInput(event.target.value);
  };

  const handleSpecialRequestsInputChange = (event) => {
    setSpecialRequestsInput(event.target.value);
  };
  const addToCart = () => {
    const newItem = {
      name: name,
      image: src,
      price: calculateTotalPrice(),
      mainQuantity: mainItemQuantity,
      piece1: piece1?.name,
      piece2: piece2?.name,
      piece1Quantity: extraItem1Quantity,
      piece2Quantity: extraItem2Quantity,
      color: colorInput,
      specialRequests: specialRequestsInput,
    };
    const updatedCart = [...cart, newItem];

    // Update cart state
    setCart(updatedCart);
    setOpenModal(true);
  };

  return (
    <main className={detailsStyles.main}>
      <img src={src} alt={alt} width={400} className={detailsStyles.image} />
      <div className={detailsStyles.wrapper}>
        <h2>{name}</h2>
        <div className={detailsStyles.form}>
          <div className={detailsStyles.addingWrapper}>
            <button
              className={detailsStyles.priceButton}
              onClick={() => handleQuantityChange(mainItemQuantity + 1)}
            >
              +
            </button>{" "}
            <p>{mainItemQuantity}</p>
            <button
              className={detailsStyles.priceButton}
              onClick={() => handleQuantityChange(mainItemQuantity - 1)}
            >
              -
            </button>
          </div>
          <div className={detailsStyles.accessory}>
            {piece1 && (
              <div className={detailsStyles.addingWrapper}>
                <h4>{piece1.name}</h4>
                <p>{piece1.price}£</p>
                <button
                  className={detailsStyles.priceButton}
                  onClick={() =>
                    handleExtraItemQuantityChange(
                      "piece1",
                      extraItem1Quantity + 1
                    )
                  }
                >
                  +
                </button>{" "}
                <p>{extraItem1Quantity}</p>
                <button
                  className={detailsStyles.priceButton}
                  onClick={() =>
                    handleExtraItemQuantityChange(
                      "piece1",
                      extraItem1Quantity - 1
                    )
                  }
                >
                  -
                </button>
              </div>
            )}
            {piece2 && (
              <div className={detailsStyles.addingWrapper}>
                <h4>{piece2.name}</h4>
                <p>{piece2.price}£</p>

                <button
                  className={detailsStyles.priceButton}
                  onClick={() =>
                    handleExtraItemQuantityChange(
                      "piece2",
                      extraItem2Quantity + 1
                    )
                  }
                >
                  +
                </button>
                <p>{extraItem2Quantity}</p>
                <button
                  className={detailsStyles.priceButton}
                  onClick={() =>
                    handleExtraItemQuantityChange(
                      "piece2",
                      extraItem2Quantity - 1
                    )
                  }
                >
                  -
                </button>
              </div>
            )}
          </div>
          <label>Which colour would you like?</label>
          <input
            className={detailsStyles.input}
            placeholder="Example: Lenny the cat: body - orange; shirt - blue; scarf and hat - pink"
            value={colorInput}
            onChange={handleColorInputChange}
          />
          <label>Special Requests</label>
          <input
            className={detailsStyles.input}
            value={specialRequestsInput}
            onChange={handleSpecialRequestsInputChange}
          />
          <h4>Item price: {price}£</h4>
          <h4>Total price: {calculateTotalPrice()}£</h4>
          <div className={detailsStyles.orderButtons}>
            <button
              className={detailsStyles.orderButton}
              onClick={() => addToCart()}
            >
              Add
            </button>
            <div
              className={detailsStyles.cartButton}
              onClick={() => setOpenModal(true)}
            >
              Go to cart <BsCart4 />
            </div>
          </div>
          <p>
            Toys come with their accessories, but you have the option to add
            extra accessories in different colors.
          </p>
        </div>
      </div>
      {openModal && (
        // <OrderPage
        //   setOpenModal={setOpenModal}
        //   setCustomer={setCustomer}
        //   setAddress={setAddress}
        //   setEmail={setEmail}
        //   setAdditionalInfo={setAdditionalInfo}
        //   orderInfo={orderInfo}
        // />
        <Cart
          cartItems={cart}
          setOpenModal={setOpenModal}
          totalPrice={calculateTotalPrice()}
        />
      )}
    </main>
  );
};

export default Details;
