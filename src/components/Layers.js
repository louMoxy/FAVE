import React from "react";
import { Layer, Feature } from "react-mapbox-gl";

const circleStyle = {
  "circle-radius": 8,
  "circle-color": "#E54E52",
  "circle-opacity": 1
};
export class Layers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: {}
    };
  }

  componentWillMount() {
    const data = require("../data/dummy-data.json");
    Object.values(data).map(val => {
      return <Feature coordinates={val.location} />;
    });
    this.setState({ places: data });
  }

  render() {
    const { places } = this.state;
    return (
      <Layer type="circle" paint={circleStyle}>
        {Object.values(places).map((place, index) => {
          return <Feature coordinates={place.location} key={place.name} />;
        })}
      </Layer>
    );
  }
}
