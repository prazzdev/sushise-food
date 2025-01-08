import styles from "./Explore.module.scss";
import FlavorCard from "../../fragments/FlavorCard";
import { HiOutlinePlus } from "react-icons/hi2";

const sushiTypes = [
  {
    name: "Sashimi",
    count: 49,
  },
  {
    name: "Maki Rolls",
    count: 29,
  },
  {
    name: "Nigiri",
    count: 20,
  },
  {
    name: "Inari",
    count: 20,
  },
  {
    name: "Specialty",
    count: 99,
  },
];

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

const Explore = () => {
  return (
    <section className={styles.ourSushi}>
      <div className={styles.explore}>
        <h1 className={styles.tagline}>
          <span>Explore Our</span>
          <span>Exquisite at Sushi Delights</span>
        </h1>
        <div className={styles.sushiTypeWrapper}>
          {sushiTypes.map((type, index) => (
            <div className={styles.sushiType} key={index}>
              <img
                src={`assets/images/sushi-type-${index + 1}.webp`}
                alt={`${type.name} Sushi`}
                className={styles.image}
              />
              <h1 className={styles.name}>{type.name} Sushi</h1>
              <span className={styles.count}>
                {type.count}+ Sushi Available
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.flavor}>
        <div className={styles.left}>
          <h1 className={styles.tagline}>
            Choose the flavor that fits you preference.
          </h1>
          <p className={styles.desc}>
            Sushifi offers a casual all-you can-eat Japanese dining experience
            with avariety of sushi and cooked dished, all at great prices.
          </p>
          <button className={styles.exploreBtn}>Explore All Menu</button>
        </div>
        <div className={styles.right}>
          <div className={styles.first}>
            <FlavorCard
              imgUrl="assets/images/sushi-plate-1.webp"
              alt="Maguro Sushi"
              name="Maguro Sushi"
              rate="5"
              price="8.00"
              bgColor="green"
            />
            <div className={styles.users}>
              <div className={styles.usersAvatar}>
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
              <div>
                <h1>100K</h1>
                <h5>Happy customers</h5>
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <FlavorCard
              imgUrl="assets/images/sushi-plate-2.webp"
              alt="Maguro Sushi"
              name="Maguro Sushi"
              rate="4.6"
              price="8.00"
              bgColor="orange"
              additionalComponent={
                <>
                  <img
                    src="assets/images/leaf-1.webp"
                    alt="Flavor Leaf image"
                    className={styles.flavorLeaf}
                  />
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.enjoy}>
        <h1 className={styles.tagline}>
          <span>Enjoy Fresh Sushi</span>
          <span>for a vibrant, healthy lifestyle.</span>
        </h1>
        <div className={styles.bentoWrapper}>
          <div className={styles.firstColumn}>
            <img
              src="assets/images/sushi-plate-3.webp"
              alt="Sushi in plate"
              className={styles.sushiImage}
            />
            <img
              src="assets/images/discount-1.webp"
              alt="discount bubble"
              className={styles.discountBubble}
            />
            <img
              src="assets/images/hero-texture.webp"
              alt="bg texture"
              className={styles.backgroundTexture}
            />
            <span className={styles.addIcon}>
              <HiOutlinePlus />
            </span>
          </div>
          <div className={styles.secondColumn}>
            <div className={styles.secondColumnFirstRow}>
              <img
                src="assets/images/sushi-3.webp"
                alt="Sushi with chopstick"
                className={styles.sushiImage}
              />
              <img
                src="assets/images/discount-2.webp"
                alt="discount bubble"
                className={styles.discountBubble}
              />
              <h1 className={styles.discountText}>
                <span>up to</span>
                <span>
                  <span className={styles.count}>30</span>% save
                </span>
              </h1>
              <span className={styles.addIcon}>
                <HiOutlinePlus />
              </span>
              <img
                src="assets/images/hero-texture.webp"
                alt="bg texture"
                className={styles.backgroundTexture}
              />
            </div>
            <div className={styles.secondColumnSecondRow}>
              <div className={styles.secondRowFirstColumn}>
                <img
                  src="assets/images/sushi-plate-4.webp"
                  alt="Sushi with chopstick"
                  className={styles.sushiImage}
                />
                <img
                  src="assets/images/hero-texture.webp"
                  alt="bg texture"
                  className={styles.backgroundTexture}
                />
                <span className={styles.addIcon}>
                  <HiOutlinePlus />
                </span>
              </div>
              <div className={styles.secondRowSecondColumn}>
                <img
                  src="assets/images/sushi-plate-5.webp"
                  alt="Sushi with chopstick"
                  className={styles.sushiImage}
                />
                <img
                  src="assets/images/hero-texture.webp"
                  alt="bg texture"
                  className={styles.backgroundTexture}
                />
                <span className={styles.addIcon}>
                  <HiOutlinePlus />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
