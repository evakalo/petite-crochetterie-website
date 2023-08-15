import homepageStyles from "../styles/HomePage.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <div className={homepageStyles.pageWrapper}>
      <div className={homepageStyles.container}>
        <div className={homepageStyles.description}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.22 }}
            className={homepageStyles.header}
          >
            Welcome to Petite Crochetterie, a crochet business lovingly crafted
            by a passionate mom.
          </motion.p>
          <button>
            <Link to="/categories">Explore categories</Link>
          </button>{" "}
        </div>
        <div className={homepageStyles.imageContainer}>
          <img
            src="../../images/cute.jpg"
            alt="table with tiny jellyfish crochet toys in jars"
          ></img>
        </div>
      </div>
      <div className={homepageStyles.about}>
        <p>
          {" "}
          Whether you're seeking a cuddly friend, a stylish cardigan, or a
          unique décor piece, my creations are here to add a handcrafted charm
          to your life. Explore the artistry of crochet and find treasures that
          blend warmth, style, and playfulness in every stitch.
        </p>
        <div className={homepageStyles.aboutPhotos}>
          <img
            src="../../images/jellyfish-room.jpg"
            alt="table with tiny jellyfish crochet toys in jars"
          />
          <img src="../../images/yarn-best.jpg" alt="yarn in  pastel colours" />

          <img src="../../images/home-slika-3-crop.jpg" alt="plant hanger" />
          <img src="../../images/home-slika-4.jpg" alt="dear crochet toy" />
        </div>
        {/* <p>
          From cozy jumpers and whimsical amigurumi to stylish accessories, you
          are sure to find something you will love among these crochet wonders.
          Each piece is delicately crafted with care, ensuring the highest
          quality and attention to detail.
        </p> */}
      </div>
      {/* <div className={homepageStyles.itemsContainer}>
        {products.map((item, key) => (
          <div key={key} className={homepageStyles.item}>
            <img src={item.url} title="Go to Etsy webshop" alt={item.alt} />

            <h3>{item.name} </h3>
            <p>Price : {item.price}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
