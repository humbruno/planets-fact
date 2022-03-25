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
    geologyImage,
    setGeologyImage,
  } = useContext(PlanetContext);

  function handleOverviewClick() {
    setPlanetText(activePlanet.overview.content);
    setPlanetImage(activePlanet.images.planet);
    setGeologyImage(false);
    setSelected(1);
  }

  function handleStructureClick() {
    setPlanetText(activePlanet.structure.content);
    setPlanetImage(activePlanet.images.internal);
    setGeologyImage(false);
    setSelected(2);
  }

  function handleGeologyClick() {
    setPlanetText(activePlanet.geology.content);
    setGeologyImage(true);
    setSelected(3);
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.mainImage}
          src={planetImage}
          alt="Planet illustration"
        />
        <div>
          <img
            src={activePlanet.images.geology}
            className={styles.geologyImage}
            alt="Geology illustration"
            style={geologyImage ? { display: "block" } : { display: "none" }}
          />
        </div>
      </div>

      <div className={styles.planetInfo}>
        <div className={styles.textContainer}>
          <h2>{activePlanet.name}</h2>
          <p>{planetText}</p>
          <p className={styles.source}>
            Source :{" "}
            <strong>
              <a href={activePlanet.overview.source} target="_blank">
                Wikipedia
                <FaExternalLinkSquareAlt
                  size={12}
                  style={{ color: "#838391" }}
                />
              </a>
            </strong>
          </p>
        </div>

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
            <span aria-hidden="true">01</span> Overview
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
            <span aria-hidden="true">02</span> Internal Structure
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
            <span aria-hidden="true">03</span> Surface Geology
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
