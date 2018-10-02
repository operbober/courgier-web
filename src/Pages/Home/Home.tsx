import * as React from 'react';
import { connect } from 'react-redux';
import HomeWithoutSign from 'src/Components/HomeWithoutSign';
import HomeWithSign from 'src/Components/HomeWithSign';
import { signUp } from 'src/store/authServices';
import { State } from 'src/store/interface/State';
import './Home.css';

class Home extends React.Component {

  public props: {
    items: {
      type: string,
      date: string,
      description: string,
      name: string,
    },
    loading: boolean,
    loggedIn: boolean,
    error: string,
    signUp(email: string, password: string): void,
  };

  public render() {
    const {items, loading, error} = this.props;

    return (
      <main >
        {!this.props.loggedIn
          ? <HomeWithoutSign signUp={this.props.signUp} />
          : <HomeWithSign items={items} loading={loading} error={error}/>
        }
      </main >
    );
  }
}

const mapStateToProps = ({auth, devices}: State) => ({
  error: devices.error,
  items: devices.items,
  loading: devices.loading,
  loggedIn: auth.loggedIn,
});

export default connect(
  mapStateToProps,
  {signUp},
)(Home);
