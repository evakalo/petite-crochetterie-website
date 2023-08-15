import footerStyles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={footerStyles.wrapper}>
      <p>
        {" "}
        Explore our{" "}
        <Link
          to="https://petitecrochetterie.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.link}
        >
          Etsy shop
        </Link>{" "}
        for ready-to-buy treasures or dive into custom possibilities by browsing
        our categories and reaching out via our{" "}
        <Link to="/contact" className={footerStyles.link}>
          contact form
        </Link>
        . Your vision, your choice!
      </p>{" "}
    </div>
  );
};
export default Footer;
