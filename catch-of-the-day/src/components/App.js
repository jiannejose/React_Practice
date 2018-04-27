import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import fishes from '../sample-fishes'; //fishes is a made up name. wes bos used 'sampleFishes'
import Fish from './Fish';

class App extends React.Component {

  state = {
    fishes: {},
    orders: {}
  };

  addFish = (fish) => {
    const fishesList = {...this.state.fishes};

    fishesList[`fish${Date.now()}`] = fish;

    this.setState({
       fishes: fishesList,
    });
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

        <Order />

        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;