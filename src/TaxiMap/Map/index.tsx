import { Map } from './Map';
import { AppState } from '../../rootReducer';
import { connect } from 'react-redux';
import { requestDrivers } from './Map.actions';

const mapStateToProps = (state: AppState) => {
  return {
    drivers: state.map.drivers
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    requestDrivers: (latitude: number, longitude: number, count: number) => dispatch(requestDrivers(latitude, longitude, count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);