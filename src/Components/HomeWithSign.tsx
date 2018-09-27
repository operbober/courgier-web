import * as React from 'react';
import DeviseDescription from 'src/Components/DevicesDescription';

export default class HomeWithSign extends React.Component {

  public props: {
    items: {
      type: string,
      date: string,
      description: string,
      name: string,
    },
    loading: boolean
  };

  public render() {
    const {items, loading} = this.props;

    return (
      <div className="container">
        {!loading
          ? <React.Fragment>
            <h1>Devices</h1>
            {Object.keys(items).map(key => (
              <DeviseDescription type={items[ key ].type} date={items[ key ].date}
                                 description={items[ key ].description} name={key}
              />
            ))}
          </React.Fragment>
          : <div className="showbox">
            <div className="loader">
              <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
              </svg>
            </div>
          </div>
        }
      </div>
    );
  }
}