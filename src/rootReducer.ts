import { combineReducers } from "redux";
import { mapReducer } from "./TaxiMap/Map/Map.reducers";

const rootReducer = combineReducers({
  map: mapReducer,
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
