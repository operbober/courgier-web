import {connectRouter} from 'connected-react-router';
import {combineReducers, Reducer} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {State} from '../models/State';
import {authReducer} from './auth/reducer';
import {devicesReducer} from './device/reducer';
import {history} from './history';
import {loadingReducer} from './loading/reducer';
import {poolsReducer} from './pool/reducer';

const reducer: Reducer<State> = combineReducers({
    loading: loadingReducer,
    auth: authReducer,
    device: devicesReducer,
    pool: poolsReducer,
});

const connectedReducer = connectRouter(history)(reducer);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
    // whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, connectedReducer);

export const rootReducer =  persistedReducer;
