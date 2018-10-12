import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './auth/reducer';
import {devicesReducer} from './device/reducer';
import {history} from './history';
import {loadingReducer} from './loading/reducer';
import {poolsReducer} from './pool/reducer';
import {State} from './State';

const reducer = combineReducers<State>({
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
