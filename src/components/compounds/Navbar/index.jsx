import styles from "./Navbar.module.scss";
import { LuSearch } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>
          Sushi<span>se</span>
        </h1>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservations</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.menuIcons}>
        <div>
          <a href="#">
            <LuSearch color="#f2dfd0" />
          </a>
          <a href="#">
            <GoPerson color="#f2dfd0" />
          </a>
          <a href="#">
            <PiShoppingCartSimple color="#f2dfd0" />
          </a>
        </div>
        <div className={styles.divider} />
        <div>
          <a href="#">
            <HiOutlineMenu color="#f2dfd0" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
