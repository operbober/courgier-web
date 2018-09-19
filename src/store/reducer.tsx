import { combineReducers } from 'redux';
import { authReducer } from './authServices/reducer';

export default combineReducers({
  auth: authReducer,
})

