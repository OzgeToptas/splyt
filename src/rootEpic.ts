import { combineEpics } from 'redux-observable';
import { requestTaxiEpic } from './TaxiMap/Map/Map.epics';

const rootEpic = combineEpics(
  requestTaxiEpic
);

export default rootEpic;