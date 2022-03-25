import { PlanetProvider } from "../context/PlanetContext";
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <PlanetProvider>
      <Navbar />
      <Body />
    </PlanetProvider>
  );
}

export default App;
