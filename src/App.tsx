import * as React from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Containers';
import * as Page from './Pages';


class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Header/>
                <Page.Auth />
                {/*<Switch>*/}
                    {/*<Route path="/login" component={Page.Auth}/>*/}
                {/*</Switch>*/}
            </React.Fragment>
        )
    }
}

export default App;
