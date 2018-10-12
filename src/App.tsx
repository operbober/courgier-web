import {ConnectedRouter} from 'connected-react-router';
import 'firebase/auth';
import * as React from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react'
import {subscribeOnAuthStateChange} from 'src/store/auth/action';
import './App.css';
import {Router} from './router/Router';
import {configureStore} from './store';
import {history} from './store/history';

const store = configureStore();
const persistor = persistStore(store);

class App extends React.Component {

    public componentDidMount() {
        store.dispatch(subscribeOnAuthStateChange());
    }

    public render() {

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <Router/>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
