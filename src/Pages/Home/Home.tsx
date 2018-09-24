import * as React from 'react';
import { connect } from 'react-redux';
import DeviseDescription from 'src/Components/DevicesDescription';
import { SignUpForm } from 'src/Components/SignUpForm';
import { signUp } from 'src/store/authServices';
import { State } from 'src/store/interface/State';
import './Home.css';

class Home extends React.Component {

  public props: {
    loggedIn: boolean,
    signUp(email: string, password: string): void,
  };

  public render() {
    return (
        <main>
          {!this.props.loggedIn
              ? <div className="container flex-container">
                <div className="content-holder">
                  <h1>Ололо</h1>
                  <p>олололололо олололололо олололололо олололололо олололололо олололололо олололололо олололололо
                    олололололо олололололо </p>
                  <div className="button-holder">
                    <a className="btn-download" href="../download/1">1</a>
                    <a className="btn-download" href="../download/2">2</a>
                    <a className="btn-download" href="../download/3">3</a>
                  </div>
                </div>
                <div className="content-holder">
                  <SignUpForm signUp={this.props.signUp}/>
                </div>
              </div> :
              <div className="container">
                <h1>Devices</h1>
                <DeviseDescription type={'iphone'} date={'13.09'} description={'olololol'} isOnline={true}
                                   name={'iphone X'} imgUrl={''}/>
                <DeviseDescription type={'iphone'} date={'13.09'}
                                   description={'olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol olololol '}
                                   isOnline={true}
                                   name={'iphone XS'} imgUrl={''}/>
                <DeviseDescription type={'iphone'} date={'13.09'} description={'olololol'} isOnline={false}
                                   name={'iphone XS Max'} imgUrl={''}/>
              </div>
          }
        </main>
    );
  }
}

const mapStateToProps = ({ auth }: State) => ({
  loggedIn: auth.loggedIn,
});

export default connect(
    mapStateToProps,
    { signUp },
)(Home);
