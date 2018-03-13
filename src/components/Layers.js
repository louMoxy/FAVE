import React from "react";
import { Layer, Feature } from "react-mapbox-gl";

const circleStyle = {
  "circle-radius": 35,
  "circle-color": "#E54E52",
  "circle-opacity": 1
};
export class Layers extends React.Component {
  render() {
    return (
      <Layer type="circle" paint={circleStyle}>
        <Feature coordinates={[-3.533518, 50.46349]} />
      </Layer>
    );
  }
}
