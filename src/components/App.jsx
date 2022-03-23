import planetData from "../data/data.json";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar planets={planetData} />
    </div>
  );
}

export default App;
