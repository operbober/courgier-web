import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {State} from 'src/store/interface/State';
import {Delay} from '../Components/Delay';
import Loader from '../Components/Loader';
import image from './Header/images/logo.png';

interface Props {
    children: React.ReactNode
    firebaseInitialized: boolean,
}

class LoadScreen extends React.Component<Props> {

    public render() {

        if (this.props.firebaseInitialized) {
            return this.props.children
        }

        return (
            <Delay>
                <div className="container center">
                    <h1>Courgier</h1>
                    <img src={image} alt="image description"/>
                    <div className="preloader_holder">
                        <Loader/>
                    </div>
                </div>
            </Delay>
        )

    }
}

const mapStateToProps = ({auth}: State) => ({
    firebaseInitialized: auth.firebaseInitialized,
});

export default compose(
    withRouter,
    connect(mapStateToProps)
)(LoadScreen);
