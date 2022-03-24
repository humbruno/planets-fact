import { PlanetProvider } from "../context/PlanetContext";
import Main from "./Main/Main";
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
