import React, { ChangeEvent } from 'react';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css';
import { IDriver } from './Map.types';

export class Map extends React.Component<MapProps, MapState> {
  state = {
    amountOfDisplayedDrivers: 0,
    latitude: 51.5049375,
    longitude: -0.0964509
  }

  changeAmountOfDisplayedDrivers = (event: ChangeEvent<{}>, value: number) => {
    const { latitude, longitude } = this.state;
    const count = Math.round(value);
    this.setState({ amountOfDisplayedDrivers: Math.round(value) });
    this.props.requestDrivers(latitude, longitude, count);
  }

  render() {
    const { amountOfDisplayedDrivers, latitude, longitude } = this.state;
    const { drivers } = this.props;

    return (
      <>
        <Typography variant="h2">
          Available Taxis
        </Typography>
        <div className={styles.sliderContainer}>
          <Typography id="label">{amountOfDisplayedDrivers}</Typography>
          <Slider
            className={styles.slider}
            value={amountOfDisplayedDrivers}
            aria-labelledby="label"
            onChange={this.changeAmountOfDisplayedDrivers}
          />
        </div>

        <LeafletMap
          center={[latitude, longitude]}
          zoom={15}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              Splyt headquarters
          </Popup>
          </Marker>
          {drivers && drivers.map(driver => <Marker position={[driver.location.latitude, driver.location.longitude]} key={driver.driver_id}>
            <Popup>
              Driver id: {driver.driver_id}
            </Popup>
          </Marker>)}
        </LeafletMap>
      </>
    );
  }
}

interface MapProps {
  drivers: IDriver[];
  requestDrivers: (latitude: number, longitude: number, count: number) => void;
};

interface MapState {
  amountOfDisplayedDrivers: number;
  latitude: number;
  longitude: number;
};