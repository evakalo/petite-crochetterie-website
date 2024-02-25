import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import detailsStyles from "../styles/Details.module.css";

const Details = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main className={detailsStyles.main}>
      <div className={detailsStyles.carousel}>
        <Carousel
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <img
            src="../../images/tricero2.jpg"
            alt="triceratops toy"
            width={400}
          />
          <img
            src="../../images/tricero1.jpg"
            alt="triceratops toy"
            width={400}
          />
          <img
            src="../../images/tricero3.jpg"
            alt="triceratops toy"
            width={400}
          />
        </Carousel>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2> Tanner the Triceratop</h2>
          <ul
            style={{
              width: "90vw",
              display: "flex",
              padding: "10px",
              listStyleType: "none",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <li>
              {" "}
              <b>Height</b> : 30cm
            </li>
            <li>
              {" "}
              <b>Price</b> : £50
            </li>
            <details
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0",
              }}
            >
              <summary>Pick your colour combination</summary>
              <img
                src="../../images/colors.png"
                alt="colours"
                width={280}
              />{" "}
            </details>
          </ul>{" "}
        </div>{" "}
        <button className={detailsStyles.orderButton}>Order now</button>
      </div>
    </main>
  );
};
export default Details;
