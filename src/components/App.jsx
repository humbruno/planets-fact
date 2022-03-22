import planetData from "../data/data.json";

function App() {
  return (
    <div>
      <h1>olar</h1>
      <button class="btn">Test btn</button>
      <div>
        {planetData.map((planet) => {
          return (
            <>
              <h4>{planet.name}</h4>
              <p>{planet.overview.content}</p>
              <p>Temperature: {planet.temperature}</p>
              <img src={planet.images.planet} alt="" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
