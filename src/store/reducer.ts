import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './auth/reducer';
import {devicesReducer} from './device/reducer';
import {history} from './history';
import {loadingReducer} from './loading/reducer';
import {metricReducer} from './metric/reducer';
import {poolsReducer} from './pool/reducer';
import {State} from './State';

const reducer = combineReducers<State>({
    auth: authReducer,
    device: devicesReducer,
    metric: metricReducer,
    pool: poolsReducer,
    loading: loadingReducer,
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
