import { useParams } from "react-router-dom";
import galleryStyles from "../styles/Gallery.module.css";
const PhotoGallery = () => {
  //useParams to access parameter from current route's url
  const { categoryName } = useParams();
  const photosByCategory = {
    "toys(0-3)": [
      {
        src: "../../images/baby-bunny.jpg",
        alt: "baby-bunny",
        name: "Baby bunny",
        price: "20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/zeko.jpg",
        alt: "fox",
        name: "Mouse",
        price: "20",
        description: "dimensions: 20 x 10",
      },

      {
        src: "../../images/cutie.jpg",
        alt: "baby-bunny",
        name: "Polar bear",
        price: "20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/zeke.jpg",
        alt: "baby-bunny",
        name: "Bunnies",
        price: "20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/zaba.jpg",
        alt: "baby-bunny",
        name: "Frog",
        price: "20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/zeko-cura.jpg",
        alt: "baby-bunny",
        name: "Bunny",
        price: "20",
        description: "dimensions: 20 x 10",
      },
    ],
    "toys(3+)": [
      {
        src: "../../images/mouse.jpg",
        alt: "baby-bunny",
        name: "Mouse",
        price: "price: 20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/medo-majica.jpg",
        alt: "fox",
        name: "Bear",
        price: "20",
        description: "dimensions: 20 x 10",
      },

      {
        src: "../../images/medo2.jpg",
        alt: "baby-bunny",
        name: "Bear",
        price: "20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/miffy.jpg",
        alt: "baby-bunny",
        name: "Bunny",
        price: "20",
        description: "dimensions: 20 x 10",
      },
      {
        src: "../../images/fox2.jpg",
        alt: "baby-bunny",
        name: "Fox",
        price: "20",
        description: "dimensions: 20 x 10",
      },
    ],
  };

  const photos = photosByCategory[categoryName];
  if (!photos) {
    return <div style={{ color: "black" }}>Category not found.</div>;
  }
  return (
    <div className={galleryStyles.wrapper}>
      {" "}
      <h2>{categoryName}</h2>
      <div className={galleryStyles.gallery}>
        {photos.map((photo, index, alt) => (
          <div key={index}>
            <img src={photo.src} alt={`Category ${categoryName}`} />

            <div className={galleryStyles.text}>
              <h4>{photo.name}</h4>
              <p>{photo.description}</p>
              <p>price: {photo.price}€ </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PhotoGallery;
