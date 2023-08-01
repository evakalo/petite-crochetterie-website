import homepageStyles from "../styles/HomePage.module.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className={homepageStyles.container}>
      <p>
        Welcome to Petite Crochetterie, an crochet business lovingly crafted by
        a passionate mom.
      </p>{" "}
      <button>
        <Link to="/categories">Explore categories</Link>
      </button>{" "}
    </div>
  );
};

export default HomePage;
