import { switchMap, debounceTime, map } from 'rxjs/operators';
import { Epic, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { REQUEST_DRIVERS, driversRecived } from './Map.actions';
import { BFF_URL } from '../../constants';

export const requestTaxiEpic: Epic = action$ => action$.pipe(
  debounceTime(1000),
  ofType(REQUEST_DRIVERS),
  switchMap(action => ajax.getJSON(
    `${BFF_URL}/drivers?latitude=${action.payload.latitude}&longitude=${action.payload.longitude}&count=${action.payload.count}`).pipe(
      map((response: any) => driversRecived(response.drivers))
    )),
);