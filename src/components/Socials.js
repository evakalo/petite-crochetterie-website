import socialStyles from "../styles/Socials.module.css";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { BiLogoTiktok } from "react-icons/bi";
import { FaEtsy } from "react-icons/fa";
import { Link } from "react-router-dom";
const Socials = () => {
  return (
    <main className={socialStyles.list}>
      <ul>
        <li>
          <Link
            to="https://www.facebook.com/thepetitecrochetterie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialFacebook />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.instagram.com/petite.crochetterie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram />
          </Link>{" "}
        </li>
        <li>
          <Link to="https://www.tiktok.com/@petitecrochetterie?is_from_webapp=1&sender_device=pc">
            <BiLogoTiktok />
          </Link>
        </li>
        <li>
          <Link
            to="https://petitecrochetterie.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEtsy className={socialStyles.etsy} />
          </Link>
        </li>
      </ul>
    </main>
  );
};
export default Socials;
