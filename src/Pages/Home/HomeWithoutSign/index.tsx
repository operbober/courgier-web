import * as React from 'react';
import { connect } from 'react-redux';
import { SignUpForm } from 'src/Components/SignUpForm';
import { signUp } from 'src/store/authServices';

export class HomeWithoutSign extends React.Component {

  public props: {
    signUp(email: string, password: string): void,
  };

  public render() {
    return (
      <div className="container flex-container" >
        <div className="content-holder" >
          <h1 >Ололо</h1 >
          <p >олололололо олололололо олололололо олололололо олололололо олололололо олололололо олололололо
              олололололо олололололо </p >
          <div className="button-holder" >
            <a className="btn-download" href="../download/1" >1</a >
            <a className="btn-download" href="../download/2" >2</a >
            <a className="btn-download" href="../download/3" >3</a >
          </div >
        </div >
        <div className="content-holder" >
          <SignUpForm signUp={this.props.signUp} />
        </div >
      </div >
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  {signUp},
)(HomeWithoutSign);