import homepageStyles from "../styles/HomePage.module.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  const products = [
    {
      name: "Fox",
      price: "20eur",
      url: "../../images/fox.jpg",
      alt: "Fox crochet toy",
    },
    {
      name: "Polar bear",
      price: "20eur",
      url: "../../images/cute.jpg",
      alt: "Polar bear crochet toy",
    },
    {
      name: "Jellyfish earing",
      price: "20eur",
      url: "../../images/jellyfish.jpg",
      alt: "Jellyfish crochet earing",
    },
    {
      name: "Plant hanger",
      price: "20eur",
      url: "../../images/plant.jpg",
      alt: "Crochet plant hanger",
    },
  ];

  return (
    <div className={homepageStyles.pageWrapper}>
      <div className={homepageStyles.container}>
        <div className={homepageStyles.description}>
          <p>
            Welcome to Petite Crochetterie, an crochet business lovingly crafted
            by a passionate mom.
          </p>
          <button>
            <Link to="/categories">Explore categories</Link>
          </button>{" "}
        </div>
        <div className={homepageStyles.imageContainer}>
          <img
            src="../../images/baby-bunny.jpg"
            alt="table with tiny jellyfish crochet toys in jars"
          ></img>
        </div>
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
        {products.map((item, key) => (
          <div key={key} className={homepageStyles.item}>
            <img src={item.url} title="Go to Etsy webshop" alt={item.alt} />

            <h3>{item.name} </h3>
            <p>Price : {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
