import socialStyles from "../styles/Socials.module.css";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
const Socials = () => {
  return (
    <main className={socialStyles.list}>
      <ul>
        <li>
          <a href="/">
            <SlSocialFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <SlSocialInstagram />
          </a>
        </li>
      </ul>
    </main>
  );
};
export default Socials;
