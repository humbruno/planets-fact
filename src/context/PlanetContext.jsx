import { createContext, useState } from "react";
import planetData from "../data/data.json";

export const PlanetContext = createContext();

export const PlanetProvider = ({ children }) => {
  const [activePlanet, setActivePlanet] = useState(planetData[0]);

  const [planetText, setPlanetText] = useState(activePlanet.overview.content);
  const [planetImage, setPlanetImage] = useState(activePlanet.images.planet);

  return (
    <PlanetContext.Provider
      value={{
        activePlanet,
        setActivePlanet,
        planetData,
        planetText,
        setPlanetText,
        planetImage,
        setPlanetImage,
      }}
    >
      {children}
    </PlanetContext.Provider>
  );
};
