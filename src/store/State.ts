import {RouterState} from 'connected-react-router';
import {AuthState} from 'src/store/auth/AuthState';
import {DeviceState} from 'src/store/device/DeviceState';
import {LoadingState} from './loading/LoadingState';
import {PoolState} from './pool/PoolState';

export interface State {
    loading: LoadingState,
    auth: AuthState,
    device: DeviceState,
    pool: PoolState
}

export interface StateWithRouter extends State{
    router: RouterState,
}
