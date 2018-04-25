import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import fishes from '../sample-fishes'; //fishes is a made up name

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
      fishes : fishes,
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>

        <Order />

        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;