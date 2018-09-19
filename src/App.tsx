import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Containers';
import * as Page from './Pages';
import { configureStore } from './store';

const history = createBrowserHistory();
const store = configureStore(history);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <Header/>
            <Switch>
              <Route exact={true} path="/" component={Page.Home}/>
              <Route path="/signin" component={Page.Signin}/>
              <Route path="/signup" component={Page.SignUp}/>
              <Route path="*" component={Page.NotFound}/>
            </Switch>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
