import { IDriver, IDriversRecived } from "./Map.types";
import { DRIVERS_RECIVED } from "./Map.actions";

interface MapState {
  drivers: IDriver[];
};

const initialState = {
  drivers: []
};

export function mapReducer(state: MapState = initialState, action: IDriversRecived) {
  switch (action.type) {
    case DRIVERS_RECIVED:
      return { drivers: action.drivers };
  }
  return state;
}