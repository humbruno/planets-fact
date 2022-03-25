import styles from "./styles.module.scss";
import { PlanetContext } from "../../context/PlanetContext";
import { useContext, useState } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Main = () => {
  const {
    activePlanet,
    planetText,
    setPlanetText,
    planetImage,
    setPlanetImage,
    selected,
    setSelected,
  } = useContext(PlanetContext);

  //const [selected, setSelected] = useState(0);

  function handleOverviewClick() {
    setPlanetText(activePlanet.overview.content);
    setPlanetImage(activePlanet.images.planet);
    setSelected(1);
  }

  function handleStructureClick() {
    setPlanetText(activePlanet.structure.content);
    setPlanetImage(activePlanet.images.internal);
    setSelected(2);
  }

  function handleGeologyClick() {
    setPlanetText(activePlanet.geology.content);
    setPlanetImage(activePlanet.images.geology);
    setSelected(3);
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={planetImage} alt="Planet illustration" />
      </div>

      <div className={styles.planetInfo}>
        <h2>{activePlanet.name}</h2>
        <p>{planetText}</p>
        <p className={styles.source}>
          Source :{" "}
          <strong>
            <a href={activePlanet.overview.source} target="_blank">
              Wikipedia
              <FaExternalLinkSquareAlt size={12} style={{ color: "#838391" }} />
            </a>
          </strong>
        </p>

        <div className={styles.categoryButtons}>
          <button
            type="button"
            className="btn"
            style={
              selected === 1
                ? { backgroundColor: activePlanet.accentColor, border: "none" }
                : null
            }
            onClick={handleOverviewClick}
          >
            <span>01</span> Overview
          </button>
          <button
            type="button"
            className="btn"
            style={
              selected === 2
                ? { backgroundColor: activePlanet.accentColor, border: "none" }
                : null
            }
            onClick={handleStructureClick}
          >
            <span>02</span> Internal Structure
          </button>
          <button
            type="button"
            className="btn"
            style={
              selected === 3
                ? { backgroundColor: activePlanet.accentColor, border: "none" }
                : null
            }
            onClick={handleGeologyClick}
          >
            <span>03</span> Surface Geology
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
