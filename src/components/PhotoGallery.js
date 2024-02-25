import { useParams } from "react-router-dom";
import galleryStyles from "../styles/Gallery.module.css";
import { Link } from "react-router-dom";
const PhotoGallery = () => {
  //useParams to access parameter from current route's url
  const { categoryName } = useParams();
  const photosByCategory = {
    "toys(0-3)": [
      {
        src: "../../images/tricero2.jpg",
        alt: "Triceratops crochet toy",
        name: "Tanner the Triceratops",
        price: "50",
        description: "height: 30cm",
      },
      {
        src: "../../images/goose.jpg",
        alt: "Goose crochet toy",
        name: "Dreamy Goose",
        price: "20",
      },
      {
        src: "../../images/hedgehog.jpg",
        alt: "Hedgehog crochet toy",
        name: "Harper Hedgehog",
        price: "30",
      },
      {
        src: "../../images/zeko.jpg",
        alt: "Bunny crochet toy",
        name: "Blossom the Bunny",
        price: "15",
        description: "dimensions: 20 x 10",
      },

      {
        src: "../../images/cute.jpg",
        alt: "polar bear crochet toy",
        name: "Parker the Polar Bear",
        price: "25",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/zeke.jpg",
        alt: "bunny crochet toy",
        name: "Huggable Honeybun",
        price: "40",
        description: "dimensions: 20 x 10",
      },
    ],
    "toys(3+)": [
      {
        src: "../../images/elephant.jpg",
        alt: "elephant crochet toy",
        name: "Elsie the Elephant",
        price: "35",
        // description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/mouse.jpg",
        alt: "mouse crochet toy",
        name: "Mr. Stitch Whiskers",
        price: "25",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/medo-majica.jpg",
        alt: "bear crochet toy",
        name: "Carefree Bear",
        price: "35",
        description: "dimensions: 20 x 10",
      },

      {
        src: "../../images/medo2.jpg",
        alt: "cat crochet toy",
        name: "Tom Kitten",
        price: "20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/miffy.jpg",
        alt: "baby bunny crochet toy",
        name: "Clover the Bunny",
        price: "35",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/sweater-bear-crop.jpg",
        alt: "polar bear with a sweater crochet toy",
        name: "Frosty the Polar Bear",
        price: "40",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/clown-crop.jpg",
        alt: "Clown crochet toy",
        name: "Clown",
        price: "40",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/yorrick-the-yeti.jpg",
        alt: "Yorrick the yeti crochet toy",
        name: "Yorrick the yeti",
        price: "40",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/octopus-family.jpg",
        alt: "octopus family crochet toys",
        name: "Octopus family",
        price: "35",
        description: "dimensions: 20 x 10",
      },
    ],
    decor: [
      {
        src: "../../images/lemon-5.jpg",
        alt: "lemon crochet decoration",
        name: "Lemon crochet toy",
        price: " 7",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/plant-pot-hanger-crop.jpg",
        alt: "crochet plant pot hanger",
        name: "Plant pot hanger",
        price: " 13 - 16",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/mini-jellyfish.jpg",
        alt: "crochet decor mini jellyfish",
        name: "Mini jellyfish",
        price: " 25",
        description: "dimensions: 20 x 10",
      },
    ],
    jewellery: [
      {
        src: "../../images/jellyfish.jpg",
        alt: "crochet jellyfish earrings",
        name: "Jellyfish earrings",
        price: " 20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/round-earrings.jpg",
        alt: "round crochet earrings",
        name: "Round earrings",
        price: " 15",
        description: "dimensions: 20 x 10",
      },
    ],
    clothes: [
      {
        src: "../../images/cable-cardigan.jpg",
        alt: "cable cardigan",
        name: "Cable cardigan",
        price: " 80",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/moss-mesh-top-crop.jpg",
        alt: "crochet moss mesh top",
        name: "Moss & Mesh tank top",
        price: " 40",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/v-neck-top.jpg",
        alt: "crochet v-neck tank top",
        name: "V-neck tank top",
        price: " 40",
        description: "dimensions: 20 x 10",
      },
    ],
  };

  const photos = photosByCategory[categoryName];
  // if (!photos) {
  //   return <div style={{ color: "black" }}>Category not found.</div>;
  // }
  return (
    <div className={galleryStyles.wrapper}>
      {" "}
      <h1>{categoryName}</h1>
      <div className={galleryStyles.gallery}>
        {photos.map((photo, index, alt) => (
          <div key={index}>
            <img src={photo.src} alt={`Category ${categoryName}`} />

            <div className={galleryStyles.text}>
              <h4>{photo.name}</h4>
              {/* <p>{photo.description}</p> */}
              <p>price: {photo.price}£ </p>
              <button className={galleryStyles.orderButton}>
                <Link>Order now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PhotoGallery;
