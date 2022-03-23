import styles from "./styles.module.scss";
import { FaBars, FaTimes, FaCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ planets }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className={styles.nav}>
      <a href="#">
        <h1>The Planets</h1>
      </a>
      <ul
        className={
          click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
        }
      >
        {planets.map((planet) => {
          return (
            <a href="#">
              <li>
                <span>
                  <FaCircle
                    className={styles.planetIcon}
                    size={20}
                    style={{ color: planet.color }}
                  />
                </span>
                {planet.name}
              </li>
            </a>
          );
        })}
      </ul>

      <div className={styles.hamburgerMenu} onClick={handleClick}>
        {click ? (
          <FaTimes size={24} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={24} style={{ color: "#fff" }} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
