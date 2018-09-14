import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { signinEpic } from '../Pages/Signin/services';
import { signupEpic } from '../Pages/Signup/services';
import firebaseApi from './firebaseApi';
import rootReducer from './reducer';

export default function (history: any) {

  firebaseApi.initialize();

  const appEpic = combineEpics(
      signupEpic,
      signinEpic
  );

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      api: {...firebaseApi },
    }
  });

  const store = createStore(
      rootReducer,
      composeWithDevTools(),
      applyMiddleware(epicMiddleware, routerMiddleware(history)),
  );

  epicMiddleware.run(appEpic);

  return store;
}