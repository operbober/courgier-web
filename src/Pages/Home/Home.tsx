import * as React from 'react';
import './Home.css';

export default class Home extends React.Component {
  public render() {
    return (
        <React.Fragment>
          <div className="container">
            <h1>Heading 1</h1>
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
        </React.Fragment>
    )
  }
}