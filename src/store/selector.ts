import {createSelector} from 'reselect';
import {AuthState} from '../models/AuthState';
import {DeviceState} from '../models/DeviceState';
import {LoadingState} from '../models/LoadingState';
import {State} from '../models/State';
import * as AuthSelector from './auth/selecor'
import * as DeviceSelector from './device/selector';
import {isLoading} from './loading/selector';


export const getAuthState = (state: State): AuthState => state.auth;
export const getLoadingState = (state: State):  LoadingState => state.loading;
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



