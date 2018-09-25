import { RouterState } from 'connected-react-router';
import { AuthState } from 'src/store/interface/AuthState';
import { DevicesState } from 'src/store/interface/DevicesState';

export interface State {
  auth: AuthState,
  devices: DevicesState
  router: RouterState
}
