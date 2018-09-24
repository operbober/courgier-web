import { RouterState } from 'connected-react-router';
import { AuthState } from './AuthState';

export interface State {
  auth: AuthState,
  router: RouterState
}
