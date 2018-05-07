import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // other way of defining 'this' in goToStore() or any made up/custom method:
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // } 

  myInput = React.createRef();

  goToStore = (e) => {
    console.log(this);
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/:storeId(whatever they entered) without refreshing the page
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore} >
        <h2>Please Enter A Store</h2>

        <input 
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()} // from helper.js
          ref={this.myInput} // used to reference input without touching the DOM or using querySelector 
          />

        <button type="submit">Visit Store → </button>
      </form>
    )
  }
}

export default StorePicker;