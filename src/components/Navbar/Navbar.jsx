import styles from "./styles.module.scss";
import { FaBars, FaTimes, FaCircle } from "react-icons/fa";
import { useState, useContext } from "react";
import { PlanetContext } from "../../context/PlanetContext";

const Navbar = () => {
  const { planetData, setActivePlanet } = useContext(PlanetContext);

  const [click, setClick] = useState(false); //need to update to refer that it's for hamburger menu
  const handleClick = () => setClick(!click); //need to update to refer that it's for hamburger menu

  function getPlanetIndex(planet) {
    return planetData.findIndex((obj) => obj.name === planet);
  }

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
        {planetData.map((planet) => {
          return (
            <li
              onClick={() =>
                setActivePlanet(planetData[getPlanetIndex(planet.name)])
              }
            >
              <a href="#">
                <span>
                  <FaCircle
                    className={styles.planetIcon}
                    size={20}
                    style={{ color: planet.color }}
                  />
                </span>
                {planet.name}
              </a>
            </li>
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
