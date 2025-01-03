import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Hero</h1>

      <img
        src="assets/images/hero-texture.webp"
        loading="lazy"
        alt="hero texture"
        className={styles.heroTexture}
      />
    </section>
  );
};

export default Hero;
