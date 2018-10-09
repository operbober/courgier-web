import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {State} from 'src/model/State';
import {Delay} from '../components/Delay';
import {Spinner} from '../components/Spinner';
import image from './Header/images/logo.png';

interface Props {
    children: React.ReactNode
    loading: boolean,
}

class LoadScreen extends React.Component<Props> {

    public render() {

        if (this.props.loading) {
            return (
                <Delay>
                    <div className="container center">
                        <h1>Courgier</h1>
                        <img src={image} alt="image description"/>
                        <div className="preloader_holder">
                            <Spinner/>
                        </div>
                    </div>
                </Delay>
            )
        }

        return this.props.children
    }
}

const mapStateToProps = ({app}: State) => ({
    loading: app.loading
});

export default compose(
    withRouter,
    connect(mapStateToProps)
)(LoadScreen);
