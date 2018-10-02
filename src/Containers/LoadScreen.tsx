import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getItems } from 'src/store/devicesServices';
import { State } from 'src/store/interface/State';
import Loader from '../Components/Loader';
import image from './Header/images/logo.png';

class LoadScreen extends React.Component {

  public props: {
    firebaseInitialized: boolean,
    user: object,
    children: React.ReactNode,
    getItems(): void
  };

  public render() {

    if (this.props.firebaseInitialized) {
      this.props.getItems()
    }

    return (
      this.props.firebaseInitialized
        ? this.props.children
        : <div className="container center" >
          <h1 >Courgier</h1 >
          <img src={image} alt="image description" />
          <div className="preloader_holder">
            <Loader />
          </div>
        </div >
    )
  }
}

const mapStateToProps = ({auth}: State) => ({
  firebaseInitialized: auth.firebaseInitialized,
  user: auth.user,
});

// @ts-ignore
export default withRouter(connect(mapStateToProps, {getItems})(LoadScreen));
