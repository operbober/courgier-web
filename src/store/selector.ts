import {createSelector} from 'reselect';
import {AuthState} from './auth/AuthState';
import * as AuthSelector from './auth/selecor'
import {DeviceState} from './device/DeviceState';
import * as DeviceSelector from './device/selector';
import {LoadingState} from './loading/LoadingState';
import {isLoading} from './loading/selector';
import {MetricState} from './metric/MetricState';
import * as MetricSelector from './metric/selector';
import {State} from './State';


export const getAuthState = (state: State): AuthState => state.auth;
export const getLoadingState = (state: State): LoadingState => state.loading;
export const getDeviceState = (state: State): DeviceState => state.device;
export const getMetricState = (state: State): MetricState => state.metric;

export const isAuthenticated = createSelector(
    getAuthState,
    AuthSelector.isAuthenticated
);

export const getUser = createSelector(
    getAuthState,
    AuthSelector.getUser
);

export const createLoadingSelector = (action: string | string[]) => {
    return createSelector(
        getLoadingState,
        isLoading(action)
    )
};

export const getAllDevices = createSelector(
    getDeviceState,
    DeviceSelector.getAllItems
);

export const getDeviceById = (id: string) => createSelector(
	getDeviceState,
	DeviceSelector.getItemById(id),
);

export const getAllMetrics = createSelector(
    getMetricState,
    MetricSelector.getAllItems
);

export const getMetricsByDevice = (deviceId: string) => createSelector(
    getMetricState,
    MetricSelector.getItemsByDeviceId(deviceId),
);



