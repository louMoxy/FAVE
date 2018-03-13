import React from "react";
import { render } from "react-dom";
import { Map } from "./components/Map";
import { Layers } from "./components/Layers";
import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>Side bar </div>
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          center={[-3.533518, 50.46349]}
        >
          <Layers />
        </Map>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
