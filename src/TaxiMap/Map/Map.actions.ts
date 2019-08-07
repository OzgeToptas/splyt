import { IDriver, IDriversRecived } from "./Map.types";

export const REQUEST_DRIVERS = 'REQUEST_DRIVERS';
export const DRIVERS_RECIVED = 'DRIVERS_RECIVED';


export const requestDrivers = (latitude: number, longitude: number, count: number) => {
  return { type: REQUEST_DRIVERS, payload: { latitude, longitude, count } };
};

export const driversRecived = (drivers: IDriver[]): IDriversRecived => {
  return { type: DRIVERS_RECIVED, drivers };
};