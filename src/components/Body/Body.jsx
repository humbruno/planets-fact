import styles from "./styles.module.scss";
import { PlanetContext } from "../../context/PlanetContext";
import { useContext, useState } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Main = () => {
  const {
    activePlanet,
    planetText,
    setPlanetText,
    planetImage,
    setPlanetImage,
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
    <>
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
            <Button
              id={1}
              clickFunction={handleOverviewClick}
              accentColor={activePlanet.accentColor}
              desktopText="Overview"
              mobileText="Overview"
            />
            <Button
              id={2}
              clickFunction={handleStructureClick}
              accentColor={activePlanet.accentColor}
              desktopText="Internal Structure"
              mobileText="Structure"
            />
            <Button
              id={3}
              clickFunction={handleGeologyClick}
              accentColor={activePlanet.accentColor}
              desktopText="Surface Geology"
              mobileText="Surface"
            />
          </div>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <Card title="Rotation Time" description={activePlanet.rotation} />
          <Card title="Revolution Time" description={activePlanet.revolution} />
          <Card title="Radius" description={activePlanet.radius} />
          <Card title="Average Temp." description={activePlanet.temperature} />
        </div>
      </div>
    </>
  );
};

export default Main;
