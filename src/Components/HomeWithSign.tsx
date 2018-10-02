import * as React from 'react';
import DeviseDescription from './DevicesDescription';
import CircularIndeterminate from './Loader';

export default class HomeWithSign extends React.Component {

  public props: {
    items: {
      type: string,
      date: string,
      description: string,
      name: string,
    },
    loading: boolean,
    error: string,
  };

  public render() {
    const {items, loading, error} = this.props;

    return (
      <div className="container" >
        {!loading
          ? <React.Fragment >
            <h1 >Devices</h1 >
            {Object.keys(items).map(key => (
              <DeviseDescription type={items[key].type} date={items[key].date}
                                 description={items[key].description} name={key}
              />
            ))}
            {error && <p>{error}</p>}
          </React.Fragment >
          : <CircularIndeterminate/>
        }
      </div >
    );
  }
}