import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { authEpic } from './authServices';
import { devicesEpic } from './devicesServices';
import firebaseApi from './firebaseApi';
import rootReducer from './reducer';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

export const configureStore = (history: History): Store => {

  firebaseApi.initialize();

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

  const store = createStore(
    connectRouter(history)(rootReducer),
    process.env.REACT_APP_DEV
      ? composeWithDevTools(enhancer)
      : enhancer,
  );

  epicMiddleware.run(rootEpic);
  return store;
};