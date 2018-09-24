import * as React from 'react';

export default class DeviseDescription extends React.Component {

  public props: {
    type: string,
    date: string,
    description: string,
    isOnline: boolean,
    name: string,
    imgUrl: string
  };

  public render() {
    return (
        <div className="content-holder">
          <strong className="device-name">{this.props.name}</strong>
          <div className="device-info">
            <div className="img-holder">
              <img src={this.props.imgUrl}
                   alt="image description"/>
            </div>
            <p>{this.props.description}</p>
            <div className="control-info">
              <span>type: {this.props.type}</span>
              <span className="online"> last active: {this.props.date}</span>
              <span>is online:
                {this.props.isOnline
                ? <span className="circle green"/>
                : <span className="circle red"/>}
              </span>
            </div>
          </div>
        </div>
    );
  }
}
