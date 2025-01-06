import styles from "./FlavorCard.module.scss";

const FlavorCard = ({
  imgUrl,
  alt,
  name = "Maguro Sushi",
  rate,
  price = "8.00",
}) => {
  return (
    <div className={styles.flavorCard}>
      <figure>
        <img src={imgUrl} alt={alt + " image"} className={styles.desc} />
      </figure>
      <div className={styles.desc}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.rate}>{rate}</div>
        <h1 className={styles.price}>${price}</h1>
      </div>
    </div>
  );
};

export default FlavorCard;
