import footerStyles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={footerStyles.wrapper}>
      <p>
        {/* Explore our
        <Link
          to="https://petitecrochetterie.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.link}
        >
          Etsy shop
        </Link>{" "} */}
        {/* Dive into custom possibilities by browsing our categories and reaching
        out via our{" "} */}
        Choose your favorite items and preferred colors!{" "}
        <Link
          to="/contact"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className={footerStyles.link}
        >
          Contact us{" "}
        </Link>
        to place your order.
      </p>{" "}
    </div>
  );
};
export default Footer;
