import Interface from "./components/interface/interface";
import "./App.scss";

import up from "./svgs/upwave.svg";
import down from "./svgs/downwave.svg";

function App() {
  return (
    <div className="App">
      <img src={up} style={{ position: "absolute", top: "-20%" }} />
      <Interface />
      <img src={down} style={{ position: "absolute", bottom: "0%" }} />
    </div>
  );
}

export default App;
