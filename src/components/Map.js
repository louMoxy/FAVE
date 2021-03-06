import React from "react";
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";

const MapBox = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibG1veGhheSIsImEiOiJjamVvcW1uMW0xbHkwMzNyd2Y5YzNkMHVvIn0.7SmoGVAYH5kIkqPY7NIV6g"
});

const circleStyle = {
  "circle-radius": 8,
  "circle-color": "#E54E52",
  "circle-opacity": 1
};
export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: {},
      selectedPlace: null
    };
  }

  onDrag() {
    if (this.state.selectedPlace) {
      this.setState({ selectedPlace: null });
    }
  }

  locationClicked(place) {
    this.setState({ selectedPlace: place });
  }

  componentWillMount() {
    const data = require("../data/dummy-data.json");
    Object.values(data).map(val => {
      return <Feature coordinates={val.location} />;
    });
    this.setState({ places: data });
  }

  render() {
    const { places, selectedPlace } = this.state;
    return (
      <MapBox
        style="mapbox://styles/mapbox/streets-v8"
        center={[-3.533518, 50.46349]}
        onDrag={this.onDrag.bind(this)}
      >
        <Layer type="circle" paint={circleStyle}>
          {Object.values(places).map((place, index) => {
            return (
              <Feature
                onClick={this.locationClicked.bind(this, place)}
                coordinates={place.location}
                key={place.name}
              />
            );
          })}
        </Layer>
        {selectedPlace && (
          <Popup key={selectedPlace.name} coordinates={selectedPlace.location}>
            <h1>{selectedPlace.name}</h1>
          </Popup>
        )}
      </MapBox>
    );
  }
}
