import * as React from 'react';
import {connect} from 'react-redux';
import {DesktopWindows, PhoneAndroid} from '@material-ui/icons';
import {SignUpForm} from 'src/components/SignUpForm';
import {signUp} from 'src/store/auth/action';
import {isAuthenticated} from '../../store/selector';
import {State} from '../../store/State';
import './Info.css'

interface Props {
    isAuthenticated: boolean

    signUp(email: string, password: string): void,
}

class InfoComponent extends React.Component<Props> {

    public render() {
        return (
            <main>
                <div className="container flex-container">
                    <div className="content-holder">
                        <h1>Courgier</h1>
                        <h2 className="container-holder__subtitle">Monitor anything</h2>
                        <p>Solutions for any kind of IT infrastructure, services, applications, resources</p>
                        <p>Download one of our default agents or create your own using our open API</p>
                        <div className="button-holder">
                            <a className="btn-download" href="#"><DesktopWindows fontSize="large" /></a>
                            <a className="btn-download" href="#"><PhoneAndroid fontSize="large"  /></a>
                            <a className="btn-download btn-download--api" href="#">API</a>
                        </div>
                    </div>
                    {!this.props.isAuthenticated &&
                    <div className="content-holder">
                        <SignUpForm signUp={this.props.signUp}/>
                    </div>
                    }
                </div>
            </main>
        );
    }

}

export const Info = connect(
    (state: State) => ({isAuthenticated: isAuthenticated(state)}),
    {signUp},
)(InfoComponent);
