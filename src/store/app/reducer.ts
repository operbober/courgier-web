import {Reducer} from 'redux';
import {AppState} from '../../model/AppState';
import {PayloadAction} from '../../model/PayloadAction';
import {CHANGE_APP_STATE} from './action';


const defaultState: AppState = {
    loading: true
};

export const appReducer: Reducer<AppState, PayloadAction<AppState>> = (state = defaultState, action) => {
    if (action.type === CHANGE_APP_STATE) {
        return {...state, ...action.payload}
    }
    return state;
};
