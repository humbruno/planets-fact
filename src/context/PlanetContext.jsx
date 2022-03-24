import { createContext, useState } from "react";
import planetData from "../data/data.json";

export const PlanetContext = createContext();

export const PlanetProvider = ({ children }) => {
  const [activePlanet, setActivePlanet] = useState(planetData[0]);

  const [planetText, setPlanetText] = useState(activePlanet.overview.content);

  return (
    <PlanetContext.Provider
      value={{
        activePlanet,
        setActivePlanet,
        planetData,
        planetText,
        setPlanetText,
      }}
    >
      {children}
    </PlanetContext.Provider>
  );
};
