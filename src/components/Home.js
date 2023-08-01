import homeStyles from "../styles/Home.module.css";
const Home = () => {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.photoWrapper}>
        <img src="../../images/cute.jpg" alt="mouse crochet toy" />
        <img
          src="../../images/jellyfish-room.jpg"
          alt="table with tiny jellyfish crochet toys in jars"
        />
        <img src="../../images/yarn-best.jpg" alt="yarn with pastel colours" />
        <p className={homeStyles.mobileText}>
          {" "}
          Each piece is delicately crafted with care, ensuring the highest
          quality and attention to detail.
        </p>
        <img src="../../images/yarn2.jpg" alt="crochet pattern" />
        <img src="../../images/plant.jpg" alt="crochet plant hanger" />{" "}
        <div className={homeStyles.textWrapper}>
          <p>
            Whether you're searching for a heartfelt gift or a little touch of
            handmade charm, <strong>Petite Crochetterie</strong> is here to add
            a *touch of magic* to your life.{" "}
          </p>
        </div>
        <p className={homeStyles.mobileText}>
          Check out all our handmade goodies in the <strong>categories</strong>{" "}
          section.
        </p>
        <img src="../../images/fox.jpg" alt="crochet fox " />
      </div>
    </div>
  );
};
export default Home;
