import styles from "./FlavorCard.module.scss";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

const FlavorCard = ({
  imgUrl,
  alt,
  name = "Maguro Sushi",
  rate,
  price = "8.00",
  bgColor = "green",
  additionalComponent,
}) => {
  return (
    <div className={`${styles.flavorCard} ${styles[bgColor]}`}>
      <figure>
        <img src={imgUrl} alt={alt + " image"} className={styles.flavorImage} />
      </figure>
      <div className={styles.desc}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.rate}>
          <div className={styles.starWrapper}>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarHalfOutline />
          </div>
          <span className={styles.rateText}>({rate})</span>
        </div>
        <h1 className={styles.price}>${price}</h1>
      </div>
      <img
        src="assets/images/hero-texture.webp"
        alt="bg texture"
        className={styles.backgroundTexture}
      />
      {additionalComponent}
    </div>
  );
};

export default FlavorCard;
