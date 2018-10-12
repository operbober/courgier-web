import {RouterState} from 'connected-react-router';
import {AuthState} from 'src/models/AuthState';
import {DeviceState} from 'src/models/DeviceState';
import {LoadingState} from './LoadingState';
import {PoolState} from './PoolState';

export interface State {
    loading: LoadingState,
    auth: AuthState,
    device: DeviceState,
    pool: PoolState
}

export interface StateWithRouter extends State{
    router: RouterState,
}
