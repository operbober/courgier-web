import {AppState} from '../../model/AppState';
import {PayloadAction} from '../../model/PayloadAction';

export const CHANGE_APP_STATE = 'CHANGE_APP_STATE';

export const appStateChange = (state: AppState): PayloadAction<AppState> => ({
    type: CHANGE_APP_STATE,
    payload: state
});
