import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authEpic } from './authServices';
import { devicesEpic } from './devicesServices';
import firebaseApi from './firebaseApi';
import rootReducer from './reducer';

export const configureStore = (history: History): Store => {

  firebaseApi.initialize();

  const persistConfig = {
    key: 'root',
    storage,
  };

  const rootEpic = combineEpics(
    authEpic,
    devicesEpic,
  );

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      api: {...firebaseApi},
    },
  });

  const enhancer = applyMiddleware(routerMiddleware(history), epicMiddleware);

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    connectRouter(history)(persistedReducer),
    process.env.REACT_APP_DEV
      ? composeWithDevTools(enhancer)
      : enhancer,
  );

  epicMiddleware.run(rootEpic);

  return store;
};