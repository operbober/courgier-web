import { combineReducers } from 'redux';
import { authReducer } from '../Pages/Signin/services/reducer';
import { singupReducer } from '../Pages/Signup/services/reducer';


export default combineReducers({
  auth: authReducer,
  singup: singupReducer,
})

