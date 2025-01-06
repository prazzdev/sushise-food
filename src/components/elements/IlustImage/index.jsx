const IlustImage = ({ src, alt, styles }) => {
  return (
    <img
      src={"assets/images/" + src}
      alt={alt + " ilustration"}
      className={styles}
    />
  );
};

export default IlustImage;
