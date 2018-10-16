import * as anime from 'animejs';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {State} from 'src/store/State';
import {Delay} from '../../components/Delay';
import {APP} from '../../store/auth/action';
import {GET_DEVICES} from '../../store/device/action';
import {createLoadingSelector} from '../../store/selector';
import image from '../Header/images/logo.png';



interface Props {
    children: React.ReactNode
    loading: boolean,
}

class LoadScreenComponent extends React.PureComponent<Props> {

    public render() {

        if (this.props.loading) {
            return (
                <Delay>
                    <div className="container center">
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {/*<h1>Courgier</h1>*/}
                            <img src={image} ref={(el) => {
                                anime({
                                    targets: el,
                                    delay: 500,
                                    duration: 2000,
                                    rotate: '1turn',
                                    loop: true
                                })
                            }} alt="image description"/>
                        </div>
                    </div>
                </Delay>
            )
        }

        return this.props.children
    }
}

const mapStateToProps = (state: State) => ({
    loading: createLoadingSelector([APP, GET_DEVICES])(state)
});

export const LoadScreen = compose(
    withRouter,
    connect(mapStateToProps)
)(LoadScreenComponent);
