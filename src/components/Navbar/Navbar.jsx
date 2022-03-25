import styles from "./styles.module.scss";
import { FaBars, FaTimes, FaCircle } from "react-icons/fa";
import { useState, useContext } from "react";
import { PlanetContext } from "../../context/PlanetContext";

const Navbar = () => {
  const {
    planetData,
    setActivePlanet,
    setPlanetText,
    setPlanetImage,
    setSelected,
  } = useContext(PlanetContext);

  const [openMenu, setOpenMenu] = useState(false); //need to update to refer that it's for hamburger menu
  const handleOpenMenu = () => setOpenMenu(!openMenu); //need to update to refer that it's for hamburger menu

  function getPlanetIndex(planet) {
    return planetData.findIndex((obj) => obj.name === planet);
  }

  function handleClick(planet) {
    setActivePlanet(planetData[getPlanetIndex(planet.name)]);
    setPlanetText(planet.overview.content);
    setPlanetImage(planet.images.planet);
    setSelected(1);
  }

  return (
    <header className={styles.nav}>
      <a href="#">
        <h1>The Planets</h1>
      </a>
      <ul
        className={
          openMenu ? `${styles.navMenu} ${styles.active}` : styles.navMenu
        }
      >
        {planetData.map((planet) => {
          return (
            <li
              onClick={() => handleClick(planet)}
              style={{ "--borderColor": planet.accentColor }}
            >
              <span>
                <FaCircle
                  className={styles.planetIcon}
                  size={20}
                  style={{ color: planet.mobileIconColor }}
                />
              </span>
              {planet.name}
            </li>
          );
        })}
      </ul>

      <div className={styles.hamburgerMenu} onClick={handleOpenMenu}>
        {openMenu ? (
          <FaTimes size={24} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={24} style={{ color: "#fff" }} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
