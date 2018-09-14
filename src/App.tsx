import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Containers';
import * as Page from './Pages';
import createStore from './store/index';

const history = createHistory();
const store = createStore(history);

class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <BrowserRouter>
              <React.Fragment>
                <Header/>
                <Switch>
                  <Route exact={true} path="/" component={Page.Home}/>
                  <Route path="/signin" component={Page.Signin}/>
                  <Route path="/signup" component={Page.Signup}/>
                  <Route path="*" component={Page.NotFound}/>
                </Switch>
              </React.Fragment>
            </BrowserRouter>
          </ConnectedRouter>
        </Provider>
    )
  }
}

export default App;
