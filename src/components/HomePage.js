import homepageStyles from "../styles/HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={homepageStyles.pageWrapper}>
      <div className={homepageStyles.container}>
        <p>
          Welcome to Petite Crochetterie, an crochet business lovingly crafted
          by a passionate mom.
        </p>
        <button>
          <Link to="/categories">Explore categories</Link>
        </button>
      </div>
      <div className={homepageStyles.about}>
        <p>
          {" "}
          Whether you're searching for a heartfelt gift or a little touch of
          handmade charm, <strong>Petite Crochetterie</strong> is here to add a
          *touch of magic* to your life.
        </p>
        <div className={homepageStyles.aboutPhotos}>
          <img
            src="../../images/jellyfish-room.jpg"
            alt="table with tiny jellyfish crochet toys in jars"
          />
          <img
            src="../../images/yarn-best.jpg"
            alt="yarn with pastel colours"
          />
        </div>
        <p>
          From cozy jumpers and whimsical amigurumi to stylish accessories, you
          are sure to find something you will love among these crochet wonders.
          Each piece is delicately crafted with care, ensuring the highest
          quality and attention to detail.
        </p>
      </div>
      <div className={homepageStyles.itemsContainer}>
        <div className={homepageStyles.item}>
          <img
            src="../../images/fox.jpg"
            title="Go to Etsy webshop"
            alt="crochet fox "
          />

          <h3>Fox </h3>
          <p>Price : 20 euros</p>
        </div>
        <div className={homepageStyles.item}>
          <img src="../../images/cute.jpg" alt="crochet fox " />
          <h3>Mouse </h3>
          <p>Price : 20 euros</p>
        </div>{" "}
        <div className={homepageStyles.item}>
          <img src="../../images/jellyfish.jpg" alt="crochet fox " />
          <h3>Jellyfish earing </h3>
          <p>Price : 20 euros</p>
        </div>{" "}
        <div className={homepageStyles.item}>
          <img src="../../images/plant.jpg" alt="crochet fox " />

          <h3>Plant hanger </h3>
          <p>Price : 20 euros</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
