import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Header from '../containers/Header/Header';
import {LoadScreen} from '../containers/LoadScreen/LoadScreen';
import * as Page from '../pages';
import {isAuthenticated} from '../store/selector';
import {State} from '../store/State';
import {PATHS} from './Paths';


interface Props {
    isAuthenticated: boolean
}

class RouterComponent extends React.Component<Props> {
    public render() {
        return (
            <LoadScreen>
                <Header/>
                <Switch>
                    <Route exact={true} path={PATHS.HOME} component={Page.Home}/>
                    <Route path={PATHS.SIGN_IN} component={Page.SignIn}/>
                    <Route path={PATHS.SIGN_UP} component={Page.SignUp}/>
                    <Route path={PATHS.INFO} component={Page.Info}/>
                    <Route exact={true} path={PATHS.DEVICES} component={Page.Devices}/>
                    <Route path={`${PATHS.DEVICE_DETAILS}/:id`} component={Page.Details}/>
                    <Route exact={true} path={PATHS.COMPARISON} component={Page.Comparison} />
                    <Route path="*" component={Page.NotFound}/>
                </Switch>
            </LoadScreen>
        );
    }
}

const mapStateToProps = (state: State) => ({
    isAuthenticated: isAuthenticated(state)
});

export const Router = compose(
    withRouter,
    connect(mapStateToProps),
)(RouterComponent);
