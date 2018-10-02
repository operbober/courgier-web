import { combineReducers } from 'redux';
import { authReducer } from './authServices/reducer';
import { devicesReducer } from './devicesServices/reducer';

export default combineReducers({
  auth: authReducer,
  devices: devicesReducer,
});

