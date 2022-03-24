import { PlanetProvider } from "../context/PlanetContext";
import Main from "./Body/Body";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <PlanetProvider>
      <Navbar />
      <Main />
    </PlanetProvider>
  );
}

export default App;
