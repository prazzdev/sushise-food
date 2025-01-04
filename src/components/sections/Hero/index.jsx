import styles from "./Hero.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi2";
import IlustImage from "../../fragments/IlustImage";

const avatars = [
  {
    url: "assets/images/avatar.webp",
  },
  {
    url: "assets/images/avatar.webp",
  },
  {
    url: "assets/images/avatar.webp",
  },
  {
    url: "assets/images/avatar.webp",
  },
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.leftPart}>
          <div>
            <h1 className={styles.heading}>
              Taste<span className="symbol">-</span>Bud
            </h1>
            <div className={styles.userAvatars}>
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar.url}
                  loading="lazy"
                  alt="avatar"
                  className={styles.avatarCircle}
                />
              ))}
              <span className={styles.avatarCircle}>
                <HiOutlinePlus />
              </span>
            </div>
          </div>
          <h1 className={styles.heading}>Captivating Sushi</h1>
          <p>
            Immerse yourself in the essence of Japan with our authentic Japanese
            cuisine, crafted with traditional techniques and premium ingredients
            for an unforgettable dining experience
          </p>
          <div className={styles.btnWrapper}>
            <button className={styles.viewMenuBtn}>
              <span>View Menu</span>
              <IoIosArrowRoundForward color="white" size={30} />
            </button>
            <button className={styles.orderProcessBtn}>
              <span className={styles.playIcon}>
                <MdPlayArrow />
              </span>
              <span>Order process !</span>
            </button>
          </div>
        </div>
        <div className={styles.rightPart}>
          <div className={styles.sushiInPlate} />
        </div>
      </div>

      <div className={styles.heroTexture}>
        <img
          src="assets/images/hero-texture.webp"
          loading="lazy"
          alt="hero texture"
        />
      </div>

      <IlustImage src="lemon-1.webp" alt="Lemon" styles={styles.heroLemon} />
      <IlustImage
        src="line-3.webp"
        alt="Swirly line"
        styles={styles.heroSwirlyLine}
      />
      <IlustImage src="line-4.webp" alt="Line" styles={styles.heroThreeLine} />
      <IlustImage src="leaf-1.webp" alt="Leaf" styles={styles.heroLeaf} />
      <IlustImage
        src="sushi-1.webp"
        alt="Sushi"
        styles={styles.heroSushiIlust}
      />
      <IlustImage
        src="leaf-2.webp"
        alt="Leaf"
        styles={styles.heroBottomCenterLeaf}
      />
      <IlustImage
        src="line-1.webp"
        alt="Swirly Line"
        styles={styles.heroSwirlyLineBottom}
      />
    </section>
  );
};

export default Hero;
