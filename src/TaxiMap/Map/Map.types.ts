export interface IDriver {
  driver_id: string;
  location: { latitude: number, longitude: number, bearing: number };
};

export interface IDriversResponse {
  drivers: IDriver[];
  pickup_eta: number;
}

export interface IDriversRecived {
  type: string;
  drivers: IDriver[];
}