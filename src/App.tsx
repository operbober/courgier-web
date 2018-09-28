import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import './App.css';
import { Header } from './Containers';
import * as Page from './Pages';
import { configureStore } from './store';

const history = createBrowserHistory();
const store = configureStore(history);
const persistor = persistStore(store);

class App extends React.Component {
  public render() {

    console.log(store.getState());

    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor} >
          <ConnectedRouter history={history} >
            <React.Fragment >
              <Header />
              <Switch >
                <Route exact={true} path="/" component={Page.Home} />
                <Route path="/signin" component={Page.SignIn} />
                <Route path="/signup" component={Page.SignUp} />
                <Route path="*" component={Page.NotFound} />
              </Switch >
            </React.Fragment >
          </ConnectedRouter >
        </PersistGate >
      </Provider >
    );
  }
}

export default App;
