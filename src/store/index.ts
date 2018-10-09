import {routerMiddleware} from 'connected-react-router';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './epic';
import firebaseApi from './firebaseApi';
import {history} from './history';
import {rootReducer} from './reducer';

export const configureStore = () => {

    firebaseApi.initialize();

    const epicMiddleware = createEpicMiddleware({
        dependencies: {
            api: {...firebaseApi},
        },
    });

    const enhancer = applyMiddleware(routerMiddleware(history), epicMiddleware);

    const store = createStore(
        rootReducer,
        process.env.REACT_APP_DEV
            ? composeWithDevTools(enhancer)
            : enhancer,
    );

    epicMiddleware.run(rootEpic);

    return store;
};
