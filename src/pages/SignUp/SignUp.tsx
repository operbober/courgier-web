import * as React from 'react';
import {connect} from 'react-redux';
import {SignUpForm} from 'src/components/SignUpForm';
import {signUp} from 'src/store/auth/action';
import './style.css';

export class SignUp extends React.Component {

    public state = {
        email: '',
        password: '',
    };

    public props: {
        signUp(email: string, password: string): void,
    };

    public handleFormFieldChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    public handleSignUp = (e: any) => {
        e.preventDefault();

        this.props.signUp(this.state.email, this.state.password);
    };

    public render() {
        return (
            <main>
                <SignUpForm signUp={this.props.signUp}/>
            </main>
        );
    }
}

export default connect(
    ({}) => ({}),
    {
        signUp,
    },
)(SignUp);
