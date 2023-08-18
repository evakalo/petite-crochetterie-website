import { useParams } from "react-router-dom";
import galleryStyles from "../styles/Gallery.module.css";
const PhotoGallery = () => {
  //useParams to access parameter from current route's url
  const { categoryName } = useParams();
  const photosByCategory = {
    "toys(0-3)": [
      {
        src: "../../images/zeko.jpg",
        alt: "Bunny",
        name: "Blossom the Bunny",
        price: "15",
        description: "dimensions: 20 x 10",
      },

      {
        src: "../../images/cute.jpg",
        alt: "polar-bear",
        name: "Parker the Polar Bear",
        price: "25",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/zeke.jpg",
        alt: "bunny",
        name: "Huggable Honeybun",
        price: "40",
        description: "dimensions: 20 x 10",
      },
    ],
    "toys(3+)": [
      {
        src: "../../images/mouse.jpg",
        alt: "mouse",
        name: "Mr. Stitch Whiskers",
        price: " 25",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/medo-majica.jpg",
        alt: "bear",
        name: "Carefree Bear",
        price: "35",
        description: "dimensions: 20 x 10",
      },

      {
        src: "../../images/medo2.jpg",
        alt: "cat",
        name: "Tom Kitten",
        price: "20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/miffy.jpg",
        alt: "baby-bunny",
        name: "Clover the Bunny",
        price: "35",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/sweater-bear-crop.jpg",
        alt: "polar bear with a sweater",
        name: "Frosty the Polar Bear",
        price: "40",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/clown-crop.jpg",
        alt: "Clown",
        name: "Clown",
        price: "40",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/yorrick-the-yeti.jpg",
        alt: "Yorrick the yeti toy",
        name: "Yorrick the yeti",
        price: "40",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/octopus-family.jpg",
        alt: "octopus family",
        name: "Octopus family",
        price: "35",
        description: "dimensions: 20 x 10",
      },
    ],
    decor: [
      {
        src: "../../images/plant-pot-hanger-crop.jpg",
        alt: "plant pot hanger",
        name: "Plant pot hanger",
        price: " 13 - 16",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/mini-jellyfish.jpg",
        alt: "decor mini jellyfish",
        name: "Mini jellyfish",
        price: " 25",
        description: "dimensions: 20 x 10",
      },
    ],
    jewellery: [
      {
        src: "../../images/jellyfish.jpg",
        alt: "jellyfish earrings",
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
        alt: "moss-mesh-top",
        name: "Moss & Mesh tank top",
        price: " 40",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/v-neck-top.jpg",
        alt: "moss-mesh-top",
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PhotoGallery;
