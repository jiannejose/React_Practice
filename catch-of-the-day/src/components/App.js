import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import fishes from '../sample-fishes'; //fishes is a made up name. wes bos used 'sampleFishes'
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

  state = {
    fishes: {},
    orders: {}
  };

  componentDidMount() {
    const { params } = this.props.match;

    // reinstate the localstorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ orders: JSON.parse(localStorageRef)});
    }
    
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.orders));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    const fishesList = {...this.state.fishes};

    fishesList[`fish${Date.now()}`] = fish;

    this.setState({
       fishes: fishesList,
    });
  }

  updateFish = (key, updatedFish) => {
    //1. make a copy of the state
    const fishes = { ...this.state.fishes };
    //2. update the specific fish on that newly created fish
    fishes[key] = updatedFish;
    //3. update the state
    this.setState({ fishes:fishes });
  }

  loadSampleFishes = () => {
    this.setState({
      fishes : fishes, // can just write 'fishes' since they're both 'fishes'.
    });
  }

  addToOrder = (key) => {
    // 1. make a copy of the order state
    const orderList = {...this.state.orders};
    // 2. either add to the order or update the number in our order
    orderList[key] = orderList[key] + 1 || 1;
    // 3. call setState to update the order state
    this.setState({
      orders: orderList,
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
              <Fish 
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder} />
            )}
          </ul>
        </div>

        <Order
          fishes={this.state.fishes}
          orders={this.state.orders}
        />
        
        <Inventory 
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
        />
      </div>
    )
  }
}

export default App;