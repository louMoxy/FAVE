import React from "react";
import { render } from "react-dom";
import { Map } from "./components/Map";
import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>Side bar </div>
        <Map />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
