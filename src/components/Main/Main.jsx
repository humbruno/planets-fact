import styles from "./styles.module.scss";
import { PlanetContext } from "../../context/PlanetContext";
import { useContext } from "react";

const Main = () => {
  const { activePlanet } = useContext(PlanetContext);

  return (
    <div className={styles.container}>
      <p>Name: {activePlanet.name}</p>
      <p>Overview: {activePlanet.overview.content}</p>
      <p>Structure: {activePlanet.structure.content}</p>
      <p>Geology: {activePlanet.geology.content}</p>
      <p>Rotation: {activePlanet.rotation}</p>
      <p>Revolution: {activePlanet.revolution}</p>
      <p>Radius: {activePlanet.radius}</p>
      <p>Temperature: {activePlanet.temperature}</p>
      <img
        src={activePlanet.images.planet}
        alt=""
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};

export default Main;
