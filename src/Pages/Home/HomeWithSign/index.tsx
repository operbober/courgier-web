import * as React from 'react';
import { connect } from 'react-redux';
import DeviseDescription from 'src/Components/DevicesDescription';
import CircularIndeterminate from 'src/Components/Loader';
import { getItems } from 'src/store/devicesServices';
import { State } from 'src/store/interface/State';

export class HomeWithSign extends React.Component {

  public props: {
    items: {
      type: string,
      date: string,
      description: string,
      name: string,
    },
    loading: boolean,
    error: string,
    getItems(): void
  };

  public componentDidMount() {
    // TODO need refactor this part of code
      this.props.getItems()
  }

  public render() {
    const {items, loading, error} = this.props;

    return (
      <div className="container" >
        {!loading
          ? <React.Fragment >
            <h1 >Devices</h1 >
            {Object.keys(items).map(key => (
              <DeviseDescription type={items[key].type}
                                 date={items[key].date}
                                 description={items[key].description}
                                 name={key}
              />
            ))}
            {error && <p >{error}</p >}
          </React.Fragment >
          : <CircularIndeterminate />
        }
      </div >
    );
  }
}

const mapStateToProps = ({auth, devices}: State) => ({
  error: devices.error,
  items: devices.items,
  loading: devices.loading,
});

export default connect(
  mapStateToProps,
  {getItems}
)(HomeWithSign);