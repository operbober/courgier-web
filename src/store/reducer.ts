import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {appReducer} from './app/reducer';
import {authReducer} from './auth/reducer';
import {devicesReducer} from './device/reducer';
import {history} from './history';
import {poolsReducer} from './pool/reducer';

const reducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    devices: devicesReducer,
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
