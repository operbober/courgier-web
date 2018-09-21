import * as React from 'react';
import { connect } from 'react-redux';
import { signOut } from 'src/store/authServices';
import { State } from 'src/store/interface/State.js';
import './Home.css';

class Home extends React.Component {

  public props: {
    loggedIn: boolean,
    signOut: () => void,
  };

  public render() {
    return (
      <React.Fragment>

        {!this.props.loggedIn
          ? <div className="container">
            <h1>!loggedIn</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet animi architecto beatae,
              consequuntur cupiditate distinctio dolor doloremque eligendi eos error esse eveniet ex exercitationem
              facere itaque iure minus mollitia nihil nobis porro possimus quam qui quibusdam quisquam rem reprehenderit
              rerum sunt suscipit vitae voluptate voluptatibus voluptatum! Harum, incidunt?</p>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in obcaecati quisquam sapiente voluptas.
              Beatae deserunt dolor eveniet libero nostrum officia omnis quis rem repellat suscipit. Dolore ducimus ea
              eaque, expedita, facere ipsum iusto nobis nulla perspiciatis repellendus rerum, voluptates!</p>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in obcaecati quisquam sapiente voluptas.
              Beatae deserunt dolor eveniet libero nostrum officia omnis quis rem repellat suscipit. Dolore ducimus ea
              eaque, expedita, facere ipsum iusto nobis nulla perspiciatis repellendus rerum, voluptates!</p>
            <h4>Heading 4</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in obcaecati quisquam sapiente voluptas.
              Beatae deserunt dolor eveniet libero nostrum officia omnis quis rem repellat suscipit. Dolore ducimus ea
              eaque, expedita, facere ipsum iusto nobis nulla perspiciatis repellendus rerum, voluptates!</p>
          </div> :
          <div className="container">
            <h1>loggedIn</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet animi architecto beatae,
              consequuntur cupiditate distinctio dolor doloremque eligendi eos error esse eveniet ex exercitationem
              facere itaque iure minus mollitia nihil nobis porro possimus quam qui quibusdam quisquam rem reprehenderit
              rerum sunt suscipit vitae voluptate voluptatibus voluptatum! Harum, incidunt?</p>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in obcaecati quisquam sapiente voluptas.
              Beatae deserunt dolor eveniet libero nostrum officia omnis quis rem repellat suscipit. Dolore ducimus ea
              eaque, expedita, facere ipsum iusto nobis nulla perspiciatis repellendus rerum, voluptates!</p>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in obcaecati quisquam sapiente voluptas.
              Beatae deserunt dolor eveniet libero nostrum officia omnis quis rem repellat suscipit. Dolore ducimus ea
              eaque, expedita, facere ipsum iusto nobis nulla perspiciatis repellendus rerum, voluptates!</p>
            <h4>Heading 4</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in obcaecati quisquam sapiente voluptas.
              Beatae deserunt dolor eveniet libero nostrum officia omnis quis rem repellat suscipit. Dolore ducimus ea
              eaque, expedita, facere ipsum iusto nobis nulla perspiciatis repellendus rerum, voluptates!</p>
          </div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({auth}: State) => ({
  loggedIn: auth.loggedIn,
});

export default connect(
  mapStateToProps,
  {signOut},
)(Home);
