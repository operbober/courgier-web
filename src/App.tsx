import {ConnectedRouter} from 'connected-react-router';
import 'firebase/auth';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react'
import LoadScreen from 'src/containers/LoadScreen';
import {subscribeOnAuthStateChange} from 'src/store/auth/action';
import './App.css';
import {Header} from './containers';
import * as Page from './pages';
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
                        <LoadScreen>
                            <React.Fragment>
                                <Header/>
                                <Switch>
                                    <Route exact={true} path="/" component={Page.Home}/>
                                    <Route path="/signin" component={Page.SignIn}/>
                                    <Route path="/signup" component={Page.SignUp}/>
                                    <Route path="*" component={Page.NotFound}/>
                                </Switch>
                            </React.Fragment>
                        </LoadScreen>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
