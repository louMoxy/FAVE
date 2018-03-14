import React from "react";
import { Layer, Feature } from "react-mapbox-gl";

const circleStyle = {
  "circle-radius": 8,
  "circle-color": "#E54E52",
  "circle-opacity": 1
};
export class Layers extends React.Component {
  render() {
    const data = require("../data/dummy-data.json");
    const layers = Object.values(data).map(val => {
      return <Feature coordinates={val.location} />;
    });
    return (
      <Layer type="circle" paint={circleStyle}>
        {layers}
      </Layer>
    );
  }
}
