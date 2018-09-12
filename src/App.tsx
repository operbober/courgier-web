import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Containers';
import * as Page from './Pages';


class App extends React.Component {
  public render() {
    return (
        <BrowserRouter>
          <React.Fragment>
            <Header/>
            <Switch>
              <Route exact={true} path="/" component={Page.Home}/>
              <Route path="/login" component={Page.Login}/>
              <Route path="/signup" component={Page.Signup}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
    )
  }
}

export default App;
