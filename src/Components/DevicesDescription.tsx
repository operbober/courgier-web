import * as React from 'react';

export default class DeviseDescription extends React.Component {

  public props: {
    type: string,
    date: string,
    description: string,
    isOnline: boolean,
    name: string,
  };

  public render() {
    return (
      <React.Fragment>
        <title>{this.props.name}</title>
        <div className="content-holder">
          <img src="" alt="image description"/>
          <p>{this.props.description}</p>
          <div className="constrol-info">
            <span>{this.props.type}</span>
            <span className="online">{this.props.date}</span>
            <span>{this.props.isOnline}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
