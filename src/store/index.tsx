import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { authEpic } from '../Pages/Auth/services';
import FirebaseApi from './firebaseApi';
import rootReducer from './reducer';

export default function (history: any) {

  const rootEpic = combineEpics(
      authEpic,
  );

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      firebaseApi: new FirebaseApi()
    }
  });

  const enhancer = applyMiddleware(routerMiddleware(history), epicMiddleware);

  const store = createStore(
      connectRouter(history)(rootReducer),
      process.env.REACT_APP_DEV
          ? composeWithDevTools(enhancer)
          : enhancer
  );

  epicMiddleware.run(rootEpic);
  return store;
}