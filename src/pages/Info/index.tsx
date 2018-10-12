import * as React from 'react';
import {connect} from 'react-redux';
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
                        <h1>Ололо</h1>
                        <p>олололололо олололололо олололололо олололололо олололололо олололололо олололололо
                            олололололо
                            олололололо олололололо </p>
                        <div className="button-holder">
                            <a className="btn-download" href="#">1</a>
                            <a className="btn-download" href="#">2</a>
                            <a className="btn-download" href="#">3</a>
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
