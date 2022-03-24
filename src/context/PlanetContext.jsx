import { createContext, useState } from "react";
import planetData from "../data/data.json";

export const PlanetContext = createContext();

export const PlanetProvider = ({ children }) => {
  const [activePlanet, setActivePlanet] = useState(planetData[0]);

  return (
    <PlanetContext.Provider
      value={{ activePlanet, setActivePlanet, planetData }}
    >
      {children}
    </PlanetContext.Provider>
  );
};
