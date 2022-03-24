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
  } = useContext(PlanetContext);

  function handleOverviewClick() {
    setPlanetText(activePlanet.overview.content);
    setPlanetImage(activePlanet.images.planet);
  }

  function handleStructureClick() {
    setPlanetText(activePlanet.structure.content);
    setPlanetImage(activePlanet.images.internal);
  }

  function handleGeologyClick() {
    setPlanetText(activePlanet.geology.content);
    setPlanetImage(activePlanet.images.geology);
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
          <button type="button" className="btn" onClick={handleOverviewClick}>
            <span>01</span> Overview
          </button>
          <button type="button" className="btn" onClick={handleStructureClick}>
            <span>02</span> Internal Structure
          </button>
          <button type="button" className="btn" onClick={handleGeologyClick}>
            <span>03</span> Surface Geology
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
