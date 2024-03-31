import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import detailsStyles from "../styles/Details.module.css";
import { useLocation } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  const { src, alt, name, price, piece1, piece2 } = location.state;
  const [totalPrice, setTotalPrice] = useState(price);

  const addItem = (additionalCost) => {
    setTotalPrice(totalPrice + additionalCost);
  };
  const removeItem = (additionalCost) => {
    setTotalPrice(totalPrice - additionalCost);
  };
  return (
    <main className={detailsStyles.main}>
      {" "}
      <img src={src} alt={alt} width={400} className={detailsStyles.image} />
      <div className={detailsStyles.wrapper}>
        <h2>{name}</h2>
        {piece1 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0px 10px",
            }}
          >
            <h4>Accessories:</h4>
            <div style={{ display: "flex", padding: "10px", gap: 10 }}>
              <p>
                {piece1.name}: {piece1.price}£{" "}
              </p>
              <button
                className={detailsStyles.priceButton}
                onClick={() => addItem(piece1.price)}
              >
                +{" "}
              </button>
              <button
                className={detailsStyles.priceButton}
                onClick={() => removeItem(piece1.price)}
              >
                -{" "}
              </button>
            </div>
          </div>
        ) : null}
        {piece2 ? (
          <div style={{ display: "flex", padding: "10px", gap: 10 }}>
            <p>
              {piece2.name}: {piece2.price}£{" "}
            </p>
            <button
              className={detailsStyles.priceButton}
              onClick={() => addItem(piece2.price)}
            >
              +{" "}
            </button>
            <button
              className={detailsStyles.priceButton}
              onClick={() => removeItem(piece2.price)}
            >
              -{" "}
            </button>
          </div>
        ) : null}
        <div className={detailsStyles.form}>
          <label>Which colour would you like?</label>
          <p style={{ fontSize: "13px" }}>
            If the toy has more colours on it, please clearly indicate which
            part is what colour (Example: Lenny the cat: body - orange; shirt -
            blue; scarf and hat - pink).{" "}
          </p>
          <input placeholder="Example: Lenny the cat: body - orange; shirt - blue; scarf and hat - pink" />
          <label>Special Requests</label>
          <p style={{ fontSize: "13px" }}>
            Any additional comments or special requests? Would you like an
            initial on your toy (subject to availability)?{" "}
          </p>
          <input />
          <h4>Price: {totalPrice}£ </h4>
          <button className={detailsStyles.orderButton}>Order now</button>{" "}
        </div>
      </div>
    </main>
  );
};
export default Details;
