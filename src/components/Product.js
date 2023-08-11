import productStyles from "../styles/Product.module.css";
const Product = () => {
  return (
    <div className={productStyles.wrapper}>
      <div className={productStyles.imageWrapper}></div>
      <div className={productStyles.textWrapper}></div>
    </div>
  );
};
export default Product;
