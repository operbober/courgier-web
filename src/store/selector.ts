import {createSelector} from 'reselect';
import {AuthState} from './auth/AuthState';
import * as AuthSelector from './auth/selecor'
import {DeviceState} from './device/DeviceState';
import * as DeviceSelector from './device/selector';
import {LoadingState} from './loading/LoadingState';
import {isLoading} from './loading/selector';
import {State} from './State';


export const getAuthState = (state: State): AuthState => state.auth;
export const getLoadingState = (state: State): LoadingState => state.loading;
export const getDeviceState = (state: State): DeviceState => state.device;

export const isAuthenticated = createSelector(
    getAuthState,
    AuthSelector.isAuthenticated
);

export const getUser = createSelector(
    getAuthState,
    AuthSelector.getUser
);

export const createLoadingSelector = (action: string) => {
    return createSelector(
        getLoadingState,
        isLoading(action)
    )
};

export const getAllDevices = createSelector(
    getDeviceState,
    DeviceSelector.getAllItems
);



