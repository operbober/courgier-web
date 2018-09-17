import { combineReducers } from 'redux';
import { authReducer } from '../Pages/Auth/services/reducer';

export default combineReducers({
  auth: authReducer,
})

